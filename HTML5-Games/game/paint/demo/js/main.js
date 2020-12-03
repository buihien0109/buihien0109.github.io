const canvas = document.getElementById('canvas');

class FreeHand {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.isDraw = false;
        this.points = [];

        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';

        this.memCanvas = document.createElement('canvas');
        this.memCtx = this.memCanvas.getContext('2d');
        this.memCanvas.width = canvas.width;
        this.memCanvas.height = canvas.height;
    }

    onMouseDown(event) {
        let x = event.offsetX;
        let y = event.offsetY;
        this.points.push({x, y})
        this.isDraw = true;
    }

    onMouseMove(event) {
        if(this.isDraw) {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ctx.drawImage(this.memCanvas, 0, 0);

            this.points.push({
                x : event.offsetX,
                y : event.offsetY
            });

            this.drawPoints();
        }
    }

    onMouseUp() {
        this.memCtx.clearRect(0, 0, canvas.width, canvas.height);
        this.memCtx.drawImage(this.canvas, 0, 0);

        this.isDraw = false;
        this.points = [];
    }

    drawPoints() {
        let ctx = this.ctx;

        if(this.points.length < 2) {
            return;
        }

        if(this.points.length == 2) {
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            ctx.lineTo(this.points[1].x, this.points[1].y);
            ctx.stroke();
            return;
        }

        ctx.beginPath();

        ctx.moveTo(this.points[0].x, this.points[0].y);

        for(var i = 1; i < this.points.length - 2; i++) {
            let centerX = (this.points[i].x +  this.points[i + 1].x) / 2;
            let centerY = (this.points[i].y +  this.points[i + 1].y) / 2;

            ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, centerX, centerY);
        }

        ctx.quadraticCurveTo(
            this.points[i].x, 
            this.points[i].y,
            this.points[i + 1].x,
            this.points[i + 1].y
        )
        ctx.stroke();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.memCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

let freehand = new FreeHand(canvas);

canvas.addEventListener('mousedown', function(e) {
    freehand.onMouseDown(e)
})

canvas.addEventListener('mousemove', function(e) {
    freehand.onMouseMove(e)
})

canvas.addEventListener('mouseup', function() {
    freehand.onMouseUp()
})

document.querySelector('.btn-reset').addEventListener('click', function() {
    freehand.clearCanvas();
})