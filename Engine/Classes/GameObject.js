Engine = Engine || {};
Engine.Classes  = Engine.Classes  || {};

Engine.Classes.GameObject = function() {
  //private  variables - will not be accessable to game objects
    var renderUpdateMethods = [];



  // private methods
    var renderUpdate = (function() {
        Engine.obvGameLoop.subscribe(function(ts) {
            for (var i = 0, len = renderUpdateMethods.length; i < len; i++) {
                renderUpdateMethods[i](ts);
            }
        });
    })();


    var gameObject = function() {
        this.objectType = "gameObject";
    }

    $.extend(gameObject.prototype, {
        onUpdate : function(func) {
            renderUpdateMethods.add(func);
        }
        
    });

  return gameObject;

};
