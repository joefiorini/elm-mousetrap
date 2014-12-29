import Graphics.Element (..)
import Text (..)
import Mousetrap
import Signal
import Debug


type Update = Open
            | NoOp

main : Signal Element
main = Signal.map displayCommand keyboardShortcuts

displayCommand command =
  case Debug.log "received command" command of
    Open -> plainText "Open File"
    _ -> plainText "Unbound"

processKeys keyString =
    case Debug.log "checking for" keyString of
      "ctrl+o" -> Open
      _ -> NoOp

keyboardShortcuts =
  Signal.map processKeys Mousetrap.keydown
