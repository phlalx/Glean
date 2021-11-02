-- Copyright (c) Facebook, Inc. and its affiliates.

module Glean.Regression.Driver.DeriveDeclFamilies (main) where

import Derive.Lib (DerivePass(..))
import Glean.Clang.Test.DerivePass (driver)
import Glean.Regression.Test (testMain)

main :: IO ()
main = testMain $ driver [DeriveDeclFamilies]