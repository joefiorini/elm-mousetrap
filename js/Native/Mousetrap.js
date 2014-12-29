Elm.Native.Mousetrap = {};

Elm.Native.Mousetrap.make = function(elm) {

  require('mousetrap');
  var MousetrapAdditions = require('mousetrap-additions');

  elm.Native = elm.Native || {};
  elm.Native.Mousetrap = elm.Native.Mousetrap || {};

  var Signal = Elm.Signal.make(elm);
  var keyEvents = Signal.constant("");

  function matches(subscription) {
    return function (keyStr) {
      elm.notify(keyEvents.id, keyStr);
    }
  }

  function noop() { }

  function bind(type) {
    MousetrapAdditions.bind(matches(keyEvents), noop, type);
    return keyEvents;
  }

  return elm.Native.Mousetrap.values = {
    keydown: bind("keydown"),
    keypress: bind("keypress"),
    keyup: bind("keyup")
  };

};
