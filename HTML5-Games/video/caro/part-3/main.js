const canvas = document.getElementById("canvas");
const btnClear = document.getElementById("btn-clear");
const c = canvas.getContext("2d");

class Board {
    constructor(cellWidth, row, col) {
        this.cellWidth = cellWidth;
        this.row = row;
        this.col = col;

        canvas.width = this.col * this.cellWidth;
        canvas.height = this.row * this.cellWidth;

        this.data = [];
        this.create2DArray();
        this.xTurn = true;
    }

    create2DArray() {
        // Loop to create 2D array using 1D array
        for (let i = 0; i < this.row; i++) {
            this.data[i] = new Array(this.col);
            this.data[i].fill(0, 0);
        }
    }

    //Vẽ lại
    drawGrid() {
        c.lineWidth = 1; // set line color
        // Vẽ kẻ ngang
        for (let i = 0; i < this.row + 1; i++) {
            c.beginPath();
            if (i === 0 || i === this.row) {
                c.strokeStyle = "#000";
            } else {
                c.strokeStyle = "#777";
            }
            c.moveTo(0, i * this.cellWidth);
            c.lineTo(this.col * this.cellWidth, i * this.cellWidth);
            c.stroke();
            c.closePath();
        }

        //Vẽ kẻ dọc
        for (let j = 0; j < this.col + 1; j++) {
            c.beginPath();
            if (j === 0 || j === this.col) {
                c.strokeStyle = "#000000";
            } else {
                c.strokeStyle = "#888";
            }
            c.moveTo(j * this.cellWidth, 0);
            c.lineTo(j * this.cellWidth, this.row * this.cellWidth);
            c.stroke();
            c.closePath();
        }
    }

    handleClick(e) {
        let x = e.layerX;
        let y = e.layerY;

        let i = Math.floor(y / this.cellWidth);
        let j = Math.floor(x / this.cellWidth);
        if (i >= 0 && j >= 0 && this.data[i][j] === 0) {
            if (this.xTurn) {
                this.data[i][j] = 1;
            } else {
                this.data[i][j] = 2;
            }
            this.xTurn = !this.xTurn;
        }
        console.log(this.data);
    }

    drawXO() {
        for(let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < this.data.length; j++) {
                if (this.data[i][j] === 1) {
                    this.drawX(i, j);
                } else if (this.data[i][j] === 2) {
                    this.drawO(i, j);
                }
            }
        }
    }

    drawX(i, j) {
        let x = j * this.cellWidth;
        let y = i * this.cellWidth;

        c.strokeStyle = "#123456";
        c.lineWidth = 3;
        c.beginPath();
        c.moveTo(x + this.cellWidth * 0.2, y + this.cellWidth * 0.2);
        c.lineTo(x + this.cellWidth * 0.8, y + this.cellWidth * 0.8);
        c.stroke();
        c.closePath();

        c.beginPath();
        c.moveTo(x + this.cellWidth * 0.2, y + this.cellWidth * 0.8);
        c.lineTo(x + this.cellWidth * 0.8, y + this.cellWidth * 0.2);
        c.stroke();
        c.closePath();
    }

    drawO(i, j) {
        let x = j * this.cellWidth;
        let y = i * this.cellWidth;

        c.beginPath();
        c.strokeStyle = "red";
        c.lineWidth = 3;
        c.arc(
            x + this.cellWidth / 2,
            y + this.cellWidth / 2,
            this.cellWidth * 0.3,
            0,
            2 * Math.PI
        );
        c.stroke();
        c.closePath();
    }

}

let board = new Board(40, 10, 10);
board.drawGrid();

canvas.addEventListener("click", function (e) {
    board.handleClick(e);
}, false);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    board.drawGrid();
    board.drawXO();
}

animate();