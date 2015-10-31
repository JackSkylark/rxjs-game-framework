Engine = Engine || {};
Engine.Rendering = Engine.Rendering || {};

Engine.Rendering.Canvas = (function() {
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
})();

// Main Game "Update" Loop
Engine.Rendering.Update = (function() {
  var subscription;

  // Assign Animation loop to subscription variable
  function animate() {
    subscription = Rx.Observable.generate(
     function (x) { return true; },
      0,
     function (x) { return x + 1; },
     function (x) { return x; },
     Rx.Scheduler.requestAnimationFrame
    )
    .timestamp()
  }

  Rx.DOM.ready().subscribe(animate);

  // Return Animation Loop Observable
  return subscription;

})();
