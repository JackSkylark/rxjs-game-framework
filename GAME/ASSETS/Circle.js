Game = Game || {};
Game.Assets = Game.Assets || {};

(function() {

  var Circle = new Engine.Classes.GameObject();

  Circle.OnUpdate(function(ts) {
    console.log(ts);
  })

  Game.Assets.Circle = Circle;

})();
