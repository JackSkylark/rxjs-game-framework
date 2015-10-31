GAME = GAME || {};
GAME.ASSETS = GAME.ASSETS ||{};

var canvas = GAME.A


GAME.ASSETS.Circle = (function() {

  var ctx = GAME.Canvas.ctx;
  var canvas = Game.Canvas;

  function Circle() {
    this.rad = 10 + Math.random() * maxRad; // radius
    this.rad2 = this.rad * this.rad;
    this.pos = new Vector(canvas.width * Math.random(), canvas.height * Math.random()); // Location
    this.vel = new Vector(Math.random() - 0.5, Math.random() - 0.5); // Speed
    this.acc = new Vector(); // Acceleration
    this.offset = new Vector(); // Offset from mouse
    this.force = new Vector(); // force
    this.c = colors[Math.floor(Math.random() * colors.length)]; // Color
    this.locked = false;
    this.parent = null;
    this.k = 0.1; // Spring constant
    this.damp = 0.98; // Damping
  }


  Circle.prototype.update = function() {
    this.vel.selfAdd(this.acc.limit(1)); // Apply acceleration
    if (this.vel.mag2() > 0.5 * 0.5) {
        this.vel.selfMult(0.99); // Velocity damping
    }
    this.pos.selfAdd(this.vel); // Move circle


    var dm = this.rad * 1; // Cache diameter
    // Wrap around canvas edges
    if (this.pos.x < -dm) this.pos.x = canvas.width + dm;
    if (this.pos.x > canvas.width + dm) this.pos.x = -dm;
    if (this.pos.y < -dm) this.pos.y = canvas.height + dm;
    if (this.pos.y > canvas.height + dm) this.pos.y = -dm;
  }

  Circle.prototype.render = function() {
    ctx.beginPath();

    if (this.pos.dist2(pointer) < this.rad2) {
        ctx.fillStyle = '#f20';
        ctx.globalAlpha = 0.35;
        pointer.over = true;
    } else {
        ctx.fillStyle = this.c;
        ctx.globalAlpha = 0.35;
    }

    ctx.arc(this.pos.x, this.pos.y, this.rad, 0, 2 * Math.PI);
    ctx.fill();

    ctx.strokeStyle = '#777777';
    ctx.globalAlpha = 0.35;

    // Loop through all circles
    for (var j = 0; j < count; j++) {
        var that = circles[j];
        // If the circles are close
        if (this.pos.dist2(that.pos) < this.rad2 * 1.44) {
            // Stroke a line from current circle to adjacent circle
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(that.pos.x, that.pos.y);
            ctx.stroke();
            // Attach it to parent
            if (this.locked && !that.locked) {
                that.locked = true;
                that.parent = this;
            }
        } else if (that.parent != null && that.parent === this) {
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(that.pos.x, that.pos.y); // Link to parent
            ctx.stroke();
        }
    }
    ctx.fillStyle = '#fff';
    ctx.fillRect(this.pos.x - ds, this.pos.y - ds, ds * 2, ds * 2); // Draw dot in center of circle
  }

  // Circle Update
  GAME.Update.subscribe(function() {


  });


  return Circle;

})()

function Circle() {

  this.rad = 10 + Math.random() * maxRad; // radius
  this.rad2 = this.rad * this.rad;
  this.pos = new Vector(canvas.width * Math.random(), canvas.height * Math.random()); // Location

}


Circle.prototype.render = function() {



}
