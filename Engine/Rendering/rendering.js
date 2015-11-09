Engine = Engine || {};
Engine.Rendering = Engine.Rendering || {};

Engine.Rendering = (function() {

    var canvas = (function() {
        var $window = $(window);
        var $canvas = $("canvas#game-window");
        $canvas[0].getContext("2d");

        function resizeCanvas() {
            $canvas.attr({
                width: $window.width(),
                height: $window.height()
            });
        }

        $window.onAsObservable("resize").subscribe(function () {
            resizeCanvas();
        });

        return $canvas[0];
    })();



    return {
        Canvas: canvas
    }


})();
