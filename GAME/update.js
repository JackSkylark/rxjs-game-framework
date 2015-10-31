// Main Game "Update" Loop

GAME.update = (function() {
  subscription;

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
    // .subscribe(draw);
  }

  //
  function draw(ts) {
    GAME.log(ts);

    GAME.Canvas.clearRect(0, 0, canvas.width, canvas.height);
    GAME.Canvas.globalCompositeOperation = 'lighter';
    pointer.over = false;



    // vignette

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

  }

  Rx.DOM.ready().subscribe(animate);

  // Return Animation Loop Observable
  return subscription;

})()
