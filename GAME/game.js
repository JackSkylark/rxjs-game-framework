var GAME = {};

GAME.Canvas = (function() {
  var $window, $canvas;

  $window = $(window);
  $canvas = $("canvas#game-window");
  $canvas[0].getContext("2d");


  function resizeCanvas() {
    $canvas.attr({
      width: $window.width(),
      height: $window.height()
    });
  }

  $window.onAsObservable('resize').subscribe(function() {
    resizeCanvas();
  });

  return {
    el = canvas[0],
    ctx = canvas[0].init();
  }
}();

GAME.log = function(str) {

    if (typeof console != "undefined") {
        var t = new Date(),
            e = new Error(),
            f = "";
        if (typeof str == "object" && typeof e.stack == "string") {
            // ugly hack to get some kind of reference to where the log call originated
            var s = e.stack.split("\n")[2]+"",
                m = s.match(/at (.*)$/);
            f = m ? "\t[" + m[1] + "]" : "";
        }
        console.log(t.toLocaleTimeString() + ": " + str + f);
    }

};
