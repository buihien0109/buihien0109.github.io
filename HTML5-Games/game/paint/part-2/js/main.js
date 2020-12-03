let canvas = document.getElementById("canvas");

class FreeHand {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");

        this.isDraw = false;
        this.points = [];

        this.context.lineWidth = 2;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.strokeStyle = "#FFF";

        this.memCanvas = document.createElement("canvas");
        this.memCanvas.width = canvas.width;
        this.memCanvas.height = canvas.height;
        this.memCtx = this.memCanvas.getContext("2d");
    }

    onmousedown(event) {
        this.x = event.offsetX;
        this.y = event.offsetY;

        this.points.push({
            x: this.x,
            y: this.y,
        });

        this.isDraw = true;
    }

    onmousemove(event) {
        if(this.isDraw) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.drawImage(this.memCanvas, 0, 0);

            this.points.push({
                x: event.offsetX,
                y: event.offsetY,
            });

            this.drawPoints();
        }
    }

    onmouseup() {
        if (this.isDraw) {
            this.isDraw = false;

            this.memCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.memCtx.drawImage(this.canvas, 0, 0);
            this.points = [];
        }
    }

    drawPoints() {
        let ctx = this.context;

        if(this.points.length <= 1) {
            return
        }

        if(this.points.length == 2) {
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            ctx.lineTo(this.points[1].x, this.points[1].y);
            ctx.stroke();
            return
        }

        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        for (var i = 1; i < this.points.length - 2; i++) {
            var c = (this.points[i].x + this.points[i + 1].x) / 2;
            var d = (this.points[i].y + this.points[i + 1].y) / 2;
            ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, c, d);
        }

        ctx.quadraticCurveTo(
            this.points[i].x,
            this.points[i].y,
            this.points[i + 1].x,
            this.points[i + 1].y
        );
        ctx.stroke();
    }
}

let freehand = new FreeHand(canvas);

canvas.addEventListener('mousedown', (e) => {
    freehand.onmousedown(e)
})

canvas.addEventListener('mousemove', (e) => {
    freehand.onmousemove(e)
})

canvas.addEventListener('mouseup', () => {
    freehand.onmouseup()
})



