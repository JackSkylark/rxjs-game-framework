Engine = Engine || {};
Engine.Classes  = Engine.Classes  || {};

Engine.Classes.GameObject = function() {
  // private  variables - will not be accessable to game objects
  var renderUpdateMethods = [];

  // private methods
  var renderUpdate = function() {
    Engine.Rendering.Update.subscribe(function(ts) {
      for(var i = 0, len = renderUpdateMethods.length; i<len; i++) {
        renderUpdateMethods[i](ts);
      }
    });
  }

  // building out
  var prototype = new Object.create(null);
  prototype.is_enabled = true;
  prototype.is_gameObject = true;

  var gameObject = Object.create(prototype);

  gameObject.OnUpdate = function(func) {
    renderUpdateMethods[] = func;
  }

  return gameObject;

};
