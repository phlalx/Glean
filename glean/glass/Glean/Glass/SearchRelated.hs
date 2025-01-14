{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

{-# LANGUAGE ApplicativeDo #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric #-}

module Glean.Glass.SearchRelated
  ( searchRelatedSymbols
  , Recursive(..)
  ) where

import Control.Monad (forM)
import Control.Monad.Catch (MonadThrow(throwM))
import Data.Hashable (Hashable(..))
import Data.HashSet (HashSet)
import Data.Text (Text)
import GHC.Generics (Generic)
import qualified Data.HashSet as HashSet

import Util.Text (textShow)

import qualified Glean
import Glean.Angle as Angle
import Glean.Haxl.Repos (RepoHaxl, ReposHaxl, withRepo)
import qualified Glean.Schema.CodemarkupTypes.Types as Code
import qualified Glean.Schema.Codemarkup.Types as Code
import qualified Glean.Schema.Code.Types as Code
import qualified Glean.Schema.Src.Types as Src

import qualified Glean.Glass.Search as Search
import Glean.Glass.Search.Class
import Glean.Glass.Base (GleanPath (..))
import qualified Glean.Glass.Query as Query
import Glean.Glass.Logging (ErrorLogger)
import Glean.Glass.Path
import Glean.Glass.SymbolId (entityToAngle, toSymbolId)
import Glean.Glass.Types
import Glean.Glass.Utils (fetchData, searchRecursiveWithLimit)

data Recursive
  = Recursive
  | NotRecursive
  deriving (Eq,Show)

data Relation
  = Extends
  | Contains
  deriving (Eq,Show)

data Direction
  = Parent
  | Child
  deriving (Eq,Show)

data RelatedEntities = RelatedEntities
  { parent :: Code.Entity
  , child :: Code.Entity
  } deriving (Eq,Show,Generic,Hashable)

searchRelatedSymbols
  :: Int
  -> Recursive
  -> RelationDirection
  -> RelationType
  -> (RepoName, Language, [Text])
  -> ReposHaxl u w ([RelatedSymbols], Maybe ErrorLogger)
searchRelatedSymbols limit recurse dir rel (repo, lang, toks) = do
  r <- Search.searchEntity lang toks
  (SearchEntity {..}, err) <- case r of
    None t -> throwM (ServerException t)
    One e -> return (e, Nothing)
    Many e _t -> return (e, Nothing)
  edges <- withRepo entityRepo $ case (dir, rel) of
    (RelationDirection_Parent, RelationType_Extends) ->
      searchRelation limit recurse Extends Parent repo [decl] HashSet.empty
    (RelationDirection_Child, RelationType_Extends) ->
      searchRelation limit recurse Extends Child repo [decl] HashSet.empty
    (RelationDirection_Parent, RelationType_Contains) ->
      searchRelation limit recurse Contains Parent repo [decl] HashSet.empty
    (RelationDirection_Child, RelationType_Contains) ->
      searchRelation limit recurse Contains Child repo [decl] HashSet.empty
    _ ->
      return []
  return (edges, err)

toSymbolIds
  :: RepoName
  -> RelatedEntities
  -> RepoHaxl u w RelatedSymbols
toSymbolIds repo RelatedEntities{..} = do
  (parentLocation, childLocation) <-
    case (entityToAngle parent, entityToAngle child) of
      (Right parent, Right child) -> (,)
        <$> (fetchData $ locationAngle parent)
        <*> (fetchData $ locationAngle child)
      (Left t, _) -> throwM (ServerException t)
      (_, Left t) -> throwM (ServerException t)
  relatedSymbols_parent <- symbol repo parent parentLocation
  relatedSymbols_child <-  symbol repo child childLocation
  pure $ RelatedSymbols {..}
  where
    symbol repo entity location = case location of
      Just (entity, file, _) -> do
        path <- GleanPath <$> Glean.keyOf file
        toSymbolId (fromGleanPath repo path) entity
      Nothing -> throwM $
        ServerException $ "Failed to get location for: " <> textShow entity


searchRelation
  :: Int
  -> Recursive
  -> Relation
  -> Direction
  -> RepoName
  -> [Code.Entity]
  -> HashSet RelatedEntities
  -> RepoHaxl u w [RelatedSymbols]
searchRelation limit recursive relation direction repo toVisit visited = do
  angle <- forM toVisit $ \entity ->
     case entityToAngle entity of
      Right angle -> return angle
      Left t -> throwM (ServerException t)
  justVisited <- case (relation, direction) of
    (Extends, Parent) -> searchParentExtends limit angle
    (Extends, Child) -> searchChildExtends limit angle
    (Contains, Parent) -> return [] -- todo
    (Contains, Child) -> searchChildContains limit angle
  let
    newlyVisited = HashSet.fromList justVisited `HashSet.difference` visited
    visited' = visited `HashSet.union` newlyVisited
    toVisit = HashSet.toList $ case direction of
      Parent -> HashSet.map parent newlyVisited
      Child -> HashSet.map child newlyVisited
    recLimit = limit - length visited'
  if
    recursive == Recursive &&
    recLimit > 0 &&
    recLimit < limit &&
    not (null toVisit)
  then
    searchRelation recLimit recursive relation direction repo toVisit visited'
  else
    mapM (toSymbolIds repo) $ HashSet.toList visited'

searchChildContains
  :: Int
  -> [Angle Code.Entity]
  -> RepoHaxl u w [RelatedEntities]
searchChildContains limit angle = do
  entities <-
    searchRecursiveWithLimit (Just limit) $ searchChildContainsAngle $
      elementsOf $ array angle
  pure $
    [ RelatedEntities
      { parent = Code.containsChildEntity_key_parent contains
      , child = Code.containsChildEntity_key_child contains
      }
    | Code.ContainsChildEntity {..} <- entities
    , Just contains <- [containsChildEntity_key]
    ]

searchParentExtends
  :: Int
  -> [Angle Code.Entity]
  -> RepoHaxl u w [RelatedEntities]
searchParentExtends limit angle = do
  entities <-
    searchRecursiveWithLimit (Just limit) $ searchParentExtendsAngle $
      elementsOf $ array angle
  pure $
    [ RelatedEntities
      { parent = Code.extendsParentEntity_key_parent extends
      , child = Code.extendsParentEntity_key_child extends
      }
    | Code.ExtendsParentEntity {..} <- entities
    , Just extends <- [extendsParentEntity_key]
    ]

searchChildExtends
  :: Int
  -> [Angle Code.Entity]
  -> RepoHaxl u w [RelatedEntities]
searchChildExtends limit angle = do
  entities <-
    searchRecursiveWithLimit (Just limit) $ searchChildExtendsAngle $
      elementsOf $ array angle
  pure $
    [ RelatedEntities
      { parent = Code.extendsChildEntity_key_parent extends
      , child = Code.extendsChildEntity_key_child extends
      }
    | Code.ExtendsChildEntity {..} <- entities
    , Just extends <- [extendsChildEntity_key]
    ]

searchChildContainsAngle :: Angle Code.Entity -> Angle Code.ContainsChildEntity
searchChildContainsAngle entity =
  predicate @Code.ContainsChildEntity (
    rec $
      field @"parent" entity
    end)

searchParentExtendsAngle :: Angle Code.Entity -> Angle Code.ExtendsParentEntity
searchParentExtendsAngle entity =
  predicate @Code.ExtendsParentEntity (
    rec $
      field @"child" entity
    end)

searchChildExtendsAngle :: Angle Code.Entity -> Angle Code.ExtendsChildEntity
searchChildExtendsAngle entity =
  predicate @Code.ExtendsChildEntity (
    rec $
      field @"parent" entity
    end)


locationAngle :: Angle Code.Entity -> Angle (ResultLocation Code.Entity)
locationAngle entity =
  vars $ \(entity' :: Angle Code.Entity) (file :: Angle Src.File)
      (rangespan :: Angle Code.RangeSpan) ->
    tuple (entity', file, rangespan) `where_` [
      entity' .= sig @Code.Entity entity,
      Query.entityLocation entity file rangespan
    ]
