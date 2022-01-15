let canvas = document.getElementById("canvas");

let btnColors = document.querySelectorAll(".color-btn");
let btnSizes = document.querySelectorAll(".size-btn");
let btnReset = document.querySelector(".btn-reset");
let btnEraser = document.querySelector(".btn-eraser");

// Duyệt qua tất cả các 'color_btn' để lắng nghe sự kiện Click
btnColors.forEach(function (btn) {
    btn.addEventListener("click", function () {
        Array.from(btnColors).map((ele) =>
            ele.classList.remove("color-btn-active")
        );
        this.classList.add("color-btn-active");
        let colorValue = this.getAttribute("color");
        freehand.context.strokeStyle = colorValue;
    });
});

// Duyệt qua tất cả các 'size_btn' để lắng nghe sự kiện Click
btnSizes.forEach(function (btn) {
    btn.addEventListener("click", function () {
        Array.from(btnSizes).map((ele) => ele.classList.remove("size-btn-active"));
        this.classList.add("size-btn-active");
        let sizeValue = this.getAttribute("size");
        freehand.context.lineWidth = Number(sizeValue);
    });
});

// Xóa toàn bộ canvas
btnReset.onclick = () => {
    freehand.clearCanvas();
};

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
        // Khi bấm chuột xuống
        // Lấy tọa độ của điểm
        // Lưu obj tọa độ đó vào mảng point
        // Cho vẽ
        this.x = event.offsetX;
        this.y = event.offsetY;

        this.points.push({
            x: this.x,
            y: this.y,
        });

        this.isDraw = true;
    }

    onmousemove(event) {
        // Khi di chuyển chuột
        // isDraw == true thì vẽ, không thì thôi
        // Xóa trắng canvas hiện tại
        // Lấy dữ liệu từ memory canvas đổ vào canvas hiện tại
        // push các obj position vào mảng point
        // Gọi method drawPoints() để vẽ hình

        if (this.isDraw) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // put back the saved content
            this.context.drawImage(this.memCanvas, 0, 0);
            this.points.push({
                x: event.offsetX,
                y: event.offsetY,
            });
            this.drawPoints();
        }
    }

    onmouseup() {
        // Khi nhắc chuột lên
        // Ngừng vẽ => isDraw = false
        // Xóa trắng memory canvas
        // xong vẽ canvas lên trên memory canvas để lưu các điểm
        if (this.isDraw) {
            this.isDraw = false;
            // When the pen is done, save the resulting context
            // to the in-memory canvas
            this.memCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.memCtx.drawImage(this.canvas, 0, 0);
            this.points = [];
        }
    }

    drawPoints() {
        let ctx = this.context;

        // Trường hợp có ít hơn 2 điểm
        if (this.points.length <= 1) {
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            ctx.lineTo(this.points[0].x, this.points[0].y);
            ctx.stroke();
            return true;
        }

         // Trường hợp có 2 điểm
        if (this.points.length == 2) {
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            ctx.lineTo(this.points[1].x, this.points[1].y);
            ctx.stroke();
            return true;
        }

        // Các trường hợp còn lại

        ctx.beginPath();
        // Bắt đầu vẽ từ điểm đầu tiên
        ctx.moveTo(this.points[0].x, this.points[0].y);

        // Duyệt từ điểm thứ 2 => this.points.length - 2
        for (var i = 1; i < this.points.length - 2; i++) {
            var c = (this.points[i].x + this.points[i + 1].x) / 2;
            var d = (this.points[i].y + this.points[i + 1].y) / 2;
            ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, c, d);
        }

        // Giữ lại điểm cuối để vẽ
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