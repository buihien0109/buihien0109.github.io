let canvas = document.getElementById("canvas");

let btnReset = document.querySelector('.btn-reset');
let colorBtns = document.querySelectorAll('.color-btn');
let sizeBtns = document.querySelectorAll('.size-btn');

colorBtns.forEach(btn => {
    btn.addEventListener('click', function() {

        Array.from(colorBtns).map(ele => ele.classList.remove('color-btn-active'));
        this.classList.add('color-btn-active');

        let colorValue = this.getAttribute('color');
        freehand.context.strokeStyle = colorValue;
    })
})

sizeBtns.forEach(btn => {
    btn.addEventListener('click', function() {

        Array.from(sizeBtns).map(ele => ele.classList.remove('size-btn-active'));
        this.classList.add('size-btn-active');

        let sizeValue = this.getAttribute('size');
        freehand.context.lineWidth = sizeValue;
    })
})


btnReset.addEventListener('click', function() {
    freehand.clearCanvas();
})


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
        if (this.isDraw) {
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

        // Tr?????ng h???p c?? ??t h??n 2 ??i???m
        if (this.points.length <= 1) {
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            ctx.lineTo(this.points[0].x, this.points[0].y);
            ctx.stroke();
            return true;
        }

         // Tr?????ng h???p c?? 2 ??i???m
        if (this.points.length == 2) {
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            ctx.lineTo(this.points[1].x, this.points[1].y);
            ctx.stroke();
            return true;
        }

        // C??c tr?????ng h???p c??n l???i

        ctx.beginPath();
        // B???t ?????u v??? t??? ??i???m ?????u ti??n
        ctx.moveTo(this.points[0].x, this.points[0].y);

        // Duy???t t??? ??i???m th??? 2 => this.points.length - 2
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

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.memCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

let freehand = new FreeHand(canvas);

canvas.onmousedown = (event) => {
    freehand.onmousedown(event);
};

canvas.onmousemove = (event) => {
    freehand.onmousemove(event);
};

canvas.onmouseup = () => {
    freehand.onmouseup();
};