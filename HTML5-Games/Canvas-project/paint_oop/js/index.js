class FreeHand {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.isDraw = false;
        this.points = [];

        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.strokeStyle='white';
    }

    onmousedown(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;

        this.points.push({
            x : this.x,
            y : this.y
        })

        this.isDraw = true;
    }

    onmousemove(e) {
        if(this.isDraw) {
            this.points.push({
                x : this.x,
                y : this.y
            })

            this.drawPoint()
        }
    }

    onmouseup() {
        this.isDraw = false;
    }

    drawPoint() {
        this.ctx.beginPath();
        
        // Bắt đầu vẽ từ điểm đầu tiên
        this.ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            this.ctx.lineTo(this.points[i].x, this.points[i].y);
        }

        this.ctx.stroke()
    }
}

let freehand = new FreeHand(canvas);

canvas.onmousedown = (event) => {
    freehand.onmousedown(event);
};

canvas.onmousemove = (event) => {
    freehand.onmousemove(event);
};

canvas.onmouseup = (event) => {
    freehand.onmouseup(event);
};