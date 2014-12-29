module Mousetrap where

import Native.Mousetrap

keydown : Signal String
keydown = Native.Mousetrap.keydown

keyup : Signal String
keyup = Native.Mousetrap.keyup

keypress : Signal String
keypress = Native.Mousetrap.keypress
