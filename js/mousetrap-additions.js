var additions = {};
var originalBind = Mousetrap.bind;
var matchFn = function() { return false; }
var callback = function() { };
var pendingKeys = [];
var previousTimeout = null;
var action = 'keydown';

function pickBestAction(action) {
  if(action === 'keypress') {
    return 'keydown';
  } else {
    return action;
  }
}

additions.bind = function() {

  if(arguments.length === 2 &&
     typeof arguments[0] === 'function' &&
     typeof arguments[1] === 'function') {
    matchFn = arguments[0];
    callback = arguments[1];
  } else if(arguments.length === 3 &&
     typeof arguments[0] === 'function' &&
     typeof arguments[1] === 'function' &&
     typeof arguments[2] === 'string') {
    matchFn = arguments[0];
    callback = arguments[1];
    action = pickBestAction(arguments[2]);
  } else {
    originalBind.apply(null, arguments);
  }

};

function resetState() {
  clearTimeout(previousTimeout);
  pendingKeys = [];
}

function handleMatch(keys, modifiers, e) {
  var keyString = keys.join(" ");

  if (Mousetrap.stopCallback(e, e.target || e.srcElement)) {
    resetState();
    return "";
  }

  if (modifiers.length > 0) {
    keyString = modifiers.reduce(function(modStr, mod) {
      return mod + "+" + modStr;
    }, keyString);
  }

  var match = matchFn(keyString);

  resetState();

  if (match) {
    return callback.apply(null, arguments);
  }

}

Mousetrap.handleKey = function(character, modifiers, e) {

  if(e.type !== action) {
    return;
  }

  // Catch repeats from holding key down
  if (pendingKeys.indexOf(character) === -1) {
    console.log(character, modifiers);
    pendingKeys = pendingKeys.concat(character);
  }

  if (previousTimeout) {
    clearTimeout(previousTimeout);
  }

  previousTimeout = setTimeout(handleMatch.bind(null, pendingKeys, modifiers, e), 50);
};

module.exports = additions;
