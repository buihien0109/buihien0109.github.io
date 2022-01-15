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
        this.win = {};
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
            // Kiểm tra thắng cuộc
            this.win = this.checkWin(i, j);
            console.log(this.win);

            // Đổi lượt chơi
            this.xTurn = !this.xTurn;
        }
    }

    drawXO() {
        for (let i in this.data) {
            for (let j in this.data[i]) {
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

    checkWin(i, j) {
        let value = this.data[i][j];

        let countHozizontal = this.checkHozizontal(i, j, value);
        let countVertical = this.checkVertical(i, j, value);
        let countDiagonal1 = this.checkDiagonalTopLeft(i, j, value);
        let countDiagonal2 = this.checkDiagonalTopRight(i, j, value);

        if (countHozizontal.count >= 5) {
            return {
                isWin: true,
                start: countHozizontal.start,
                end: countHozizontal.end,
            };
        } else if (countVertical.count >= 5) {
            return {
                isWin: true,
                start: countVertical.start,
                end: countVertical.end,
            };
        } else if (countDiagonal1.count >= 5) {
            return {
                isWin: true,
                start: countDiagonal1.start,
                end: countDiagonal1.end,
            };
        } else if (countDiagonal2.count >= 5) {
            return {
                isWin: true,
                start: countDiagonal2.start,
                end: countDiagonal2.end,
            };
        }
        return {
            isWin: false
        };
    }

    checkHozizontal(row, col, value) {
        let count = 1;
        let startI = row;
        let endI = row;
        // Check bên trái value
        for (let i = row - 1; i >= 0; i--) {
            if (value === this.data[i][col]) {
                startI = i;
                count++;
            } else {
                break;
            }
        }

        // Check bên phải value
        for (let i = row + 1; i < this.data.length; i++) {
            if (value === this.data[i][col]) {
                endI = i;
                count++;
            } else {
                break;
            }
        }

        return {
            count,
            start: {
                startI,
                startJ: col
            },
            end: {
                endI,
                endJ: col
            },
        };
    }

    checkVertical(row, col, value) {
        let count = 1;
        let startJ = col;
        let endJ = col;
        // Check lên trên value
        for (let i = col - 1; i >= 0; i--) {
            if (value === this.data[row][i]) {
                startJ = i;
                count++;
            } else {
                break;
            }
        }

        // Check xuống dưới value
        for (let i = col + 1; i < this.data.length; i++) {
            if (value === this.data[row][i]) {
                endJ = i;
                count++;
            } else {
                break;
            }
        }

        return {
            count,
            start: {
                startI: row,
                startJ
            },
            end: {
                endI: row,
                endJ
            },
        };
    }

    checkDiagonalTopLeft(row, col, value) {
        let count = 1;
        let startI = row;
        let startJ = col;
        let endI = row;
        let endJ = col;

        // Check đường chéo -> Top left
        for (let i = 1; i < this.data.length; i++) {
            if (row - i < 0 || col - i < 0) {
                break;
            }
            if (value === this.data[row - i][col - i]) {
                startI = row - i;
                startJ = col - i;
                count++;
            } else {
                break;
            }
        }

        // Check đường chéo -> Bot Right
        for (let i = 1; i < this.data.length; i++) {
            if (
                row + i > this.data.length - 1 ||
                col + i > this.data[row].length - 1
            ) {
                break;
            }
            if (value === this.data[row + i][col + i]) {
                endI = row + i;
                endJ = col + i;
                count++;
            } else {
                break;
            }
        }

        return {
            count,
            start: {
                startI,
                startJ
            },
            end: {
                endI,
                endJ
            }
        };
    }

    checkDiagonalTopRight(row, col, value) {
        let count = 1;
        let startI = row;
        let startJ = col;
        let endI = row;
        let endJ = col;

        // Check đường chéo -> Top Right
        for (let i = 1; i < this.data.length; i++) {
            if (row - i < 0 || col + i > this.data[i].length) {
                break;
            }
            if (value === this.data[row - i][col + i]) {
                startI = row - i;
                startJ = col + i;
                count++;
            } else {
                break;
            }
        }

        // Check đường chéo -> Bot left
        for (let i = 1; i < this.data.length; i++) {
            if (row + i > this.data.length - 1 || col - i < 0) {
                break;
            }
            if (value === this.data[row + i][col - i]) {
                endI = row + i;
                endJ = col - i;
                count++;
            } else {
                break;
            }
        }

        return {
            count,
            start: {
                startI,
                startJ
            },
            end: {
                endI,
                endJ
            }
        };
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