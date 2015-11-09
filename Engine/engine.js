var Engine = {};

// core observables
Engine.obvGameLoop = (function() {
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
            .timestamp();
    }

    Rx.DOM.ready().subscribe(animate);

    // Return Animation Loop Observable
    return subscription;
});

Engine.log = function(str) {
    if (typeof console != "undefined") {
        var t = new Date(),
            e = new Error(),
            f = "";
        if (typeof str == "object" && typeof e.stack == "string") {
            // ugly hack to get some kind of reference to where the log call originated
            var s = e.stack.split("\n")[2] + "",
                m = s.match(/at (.*)$/);
            f = m ? "\t[" + m[1] + "]" : "";
        }
        console.log(t.toLocaleTimeString() + ": " + str + f);
    }
};
