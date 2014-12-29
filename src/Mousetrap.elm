module Mousetrap where
{-| This library gives you a Signal that receives a string representing keys that were just pressed. For example, if you hold down Ctrl and press "o" then the Signal will receive the string "ctrl+o". This allows you to map values to keyboard shortcuts in one place, ie. a `case` statement or a set of guards.

## Loading

`import Mousetrap`

## Using

@docs keydown, keyup, keypress
-}

import Signal
import Native.Mousetrap

{-| Tells Mousetrap to fire on keydown events

Returns a Signal that will receive a string representing the keys that were pressed.
-}
keydown : Signal String
keydown = Native.Mousetrap.keydown

{-| Tells Mousetrap to fire on keyup events

Returns a Signal that will receive a string representing the keys that were pressed.
-}
keyup : Signal String
keyup = Native.Mousetrap.keyup

{-| Tells Mousetrap to fire on keypress events

Returns a Signal that will receive a string representing the keys that were pressed.
-}
keypress : Signal String
keypress = Native.Mousetrap.keypress
