$(document).ready(function () {
    _KSM = {
        draw: function (left, top, width, height, stroke, fill) {
            var canvas = document.getElementById('theCanvas');
            if (canvas.getContext) {
                var context = canvas.getContext('2d');
                if (typeof fill === 'undefined')
                    fill = 'silver';
                if (typeof stroke === 'undefined')
                    stroke = 'black';
                if (typeof left === 'undefined')
                    left = 10;
                if (typeof top === 'undefined')
                    top = 10;
                if (typeof width === 'undefined')
                    width = 100;
                if (typeof height === 'undefined')
                    height = 100;

                context.strokeStyle = stroke;
                context.fillStyle = fill;
                context.fillRect(left, top, width, height);
                context.strokeRect(left, top, width, height);
            }
        },
        drawWithObjectParameter: function (options) {
            var canvas = document.getElementById('theCanvas');
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                if (typeof options !== "object" || options === null)
                    options = {};
                if (typeof options.fill === 'undefined')
                    options.fill = 'silver';
                if (typeof options.stroke === 'undefined')
                    options.stroke = 'black';
                if (typeof options.left === 'undefined')
                    options.left = 10;
                if (typeof options.top === 'undefined')
                    options.top = 10;
                if (typeof options.width === 'undefined')
                    options.width = 100;
                if (typeof options.height === 'undefined')
                    options.height = 100;

                context.strokeStyle = options.stroke;
                context.fillStyle = options.fill;
                context.fillRect(options.left, options.top, options.width, options.height);
                context.strokeRect(options.left, options.top, options.width, options.height);
            }
        }
    }
    _KSM.draw();
    _KSM.draw(530, 370, 440, 280);
    _KSM.draw(100, 100, 440, 280, 'burlywood', 'lemonchiffon');
    _KSM.drawWithObjectParameter({ left: 20, right: 20, stroke: 'black' });
});