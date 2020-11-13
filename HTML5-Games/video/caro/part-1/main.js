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
            c.lineTo( this.col * this.cellWidth, i * this.cellWidth );
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
}

let board = new Board(40, 20, 40);
board.drawGrid();