-- Copyright (c) Facebook, Inc. and its affiliates.

module Glean.Query.BindOrder
  ( Fix
  , Scope(..)
  , NoBind(..)
  , IsPat(..)
  , runFixBindOrder
  , FixBindOrder(..)
  , FixBindOrderError(..)
  ) where

import Control.Monad.Except
import Control.Monad.State
import Data.IntSet (IntSet)
import qualified Data.IntSet as IntSet

import Glean.Query.Codegen
import Glean.RTS.Term as RTS hiding (Match(..))

-- -----------------------------------------------------------------------------
-- Fixing up MatchBind vs. MatchVar

-- Substitution can mess up MatchBind and MatchVar - we might end up
-- with multiple MatchBinds for a variable, or a MatchVar before a
-- MatchBind. To fix it up all we need to do is traverse the query in
-- the correct order, keeping track of which variables are in scope,
-- and change MatchBind<->MatchVar as appropriate.
--
-- This is all somewhat suboptimal, because the typechecker has
-- already figured out MatchBind vs. MatchVar and here we mess it up
-- by substitution and then fix it again. Which begs the question: why
-- do we have MatchBind and MatchVar at all, couldn't we leave it
-- until the last minute just before code generation to figure out
-- which variables are binding occurrences?  Yes, but it's nice to be
-- able to give the user out-of-scope error messages from the
-- typechecker.  Maybe we'll change this in the future.

newtype Scope = Scope
  { unScope :: IntSet
  }

-- | Variables that should not be bound.
-- Statements in a negated subquery should not bind values that occur later
-- in a positive statement.
newtype NoBind = NoBind
  { unNoBind :: IntSet
  }

data FixBindOrderError
  = CannotUseWildcardInExpr
  | UnboundVariable Var

type Fix a = StateT (Scope, NoBind) (Except FixBindOrderError) a

runFixBindOrder
  :: Scope -> NoBind -> Fix a -> Except FixBindOrderError (a, Scope)
runFixBindOrder scope nobind fx = do
  (res, (scope', _)) <- runStateT fx (scope, nobind)
  return (res, scope')

data IsPat = IsPat | IsExpr
  deriving Eq

class FixBindOrder a where
  fixBindOrder :: IsPat -> a -> Fix a

instance FixBindOrder Generator where
  fixBindOrder isPat (TermGenerator p) =
    TermGenerator <$> fixBindOrder isPat p
  fixBindOrder _ (ArrayElementGenerator ty p) =
    ArrayElementGenerator ty <$> fixBindOrder IsExpr p
  fixBindOrder isPat (DerivedFactGenerator pid key val) =
    DerivedFactGenerator pid
      <$> fixBindOrder isPat key
      <*> fixBindOrder isPat val
  fixBindOrder _ (FactGenerator pid kpat vpat) =
    FactGenerator pid <$> fixBindOrder IsPat kpat <*> fixBindOrder IsPat vpat
  fixBindOrder _ (PrimCall op pats) =
    PrimCall op <$> mapM (fixBindOrder IsExpr) pats

instance FixBindOrder a => FixBindOrder (Term a) where
  fixBindOrder isPat term = mapM (fixBindOrder isPat) term

instance FixBindOrder () where
  fixBindOrder _ () = return ()

instance (FixBindOrder a) => FixBindOrder (Match a Var) where
  fixBindOrder IsExpr MatchWild{} =
    throwError CannotUseWildcardInExpr
  fixBindOrder isPat (MatchBind var) = fixVar isPat var
  fixBindOrder isPat (MatchVar var) = fixVar isPat var
  fixBindOrder isPat (MatchAnd a b) =
    MatchAnd <$> mapM (fixBindOrder isPat) a <*> mapM (fixBindOrder isPat) b
  fixBindOrder isPat (MatchPrefix str rest) =
    MatchPrefix str <$> mapM (fixBindOrder isPat) rest
  fixBindOrder isPat (MatchSum alts) =
    MatchSum <$> mapM (mapM (mapM (fixBindOrder isPat))) alts
  fixBindOrder isPat (MatchExt ext) = MatchExt <$> fixBindOrder isPat ext
  fixBindOrder _ other = return other

fixVar :: IsPat -> Var -> Fix (Match a Var)
fixVar isPat var@(Var _ v _) = do
  (Scope inScope, NoBind noBind) <- get
  if
    | v `IntSet.member` inScope -> return (MatchVar var)
    | (IsExpr == isPat) || (v `IntSet.member` noBind)
      -> throwError $ UnboundVariable var
    | otherwise -> do
      put (Scope (IntSet.insert v inScope), NoBind noBind)
      return (MatchBind var)