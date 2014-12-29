# Elm Mousetrap

Gorgeous keyboard shortcuts to go with your gorgeous FRP'd code!

This plugin gives you an Elm signal for processing keyboard shortcuts with the excellent [Mousetrap](http://craig.is/killing/mice) library.

## Usage

The `Mousetrap` module exposes 3 functions, `keyup`, `keydown`, and `keypress`. You only need to use one, depending on which keyboard event you need. You can map over the given signal to get the keyboard shortcut the user pressed. For example:

```elm
import Mousetrap

type Update = Open
            | New
            | GoToInbox
            | NoOp

keyboardShortcuts = Signal.map processKeys Mousetrap.keydown

processKeys : String -> Update
processKeys keyCommand =
  case keyCommand of
    "ctrl+o"  -> Open
    "ctrl+n"  -> New
    "g o"     -> GoToInbox
    _         -> NoOp
```

## Installing

This is an Elm package, so just run `elm-package install joefiorini/elm-mousetrap` to install in your app.

## Why?

In an application with lots of keyboard shortcuts, it's nice to be able to see them all listed plainly, rather than having to do imperative checks for keyCode and modifier keys.

## Contributing

This library includes an Elm Native wrapper (`js/Native/Mousetrap.js`) to integrate with the Mousetrap library. We use browserify to compile all the libraries into a single file. To build this library on your machine, you will need to install browserify and build the native wrapper.

1. Clone [the repo](https://github.com/joefiorini/elm-mousetrap)
2. Install browserify globally by running `npm install -g browserify`
3. Build the Elm wrapper by running `make native`
4. Run `elm-reactor` in the root of the library and visit <http://localhost:8000> and browse to `example/keyboard.elm`

