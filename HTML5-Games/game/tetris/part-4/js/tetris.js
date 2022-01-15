const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");

const ROW = 18;
const COL = 10;
const SQ = 40;
const VACANT = "WHITE"; // color of an empty square

// draw a square
function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    ctx.strokeStyle = "#ccc";
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

// create the board

let board = [];
for (r = 0; r < ROW; r++) {
    board[r] = [];
    for (c = 0; c < COL; c++) {
        board[r][c] = VACANT;
    }
}

// draw the board
function drawBoard() {
    for (r = 0; r < ROW; r++) {
        for (c = 0; c < COL; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}

drawBoard();

const PIECES = [
    [Z, "red"],
    [S, "green"],
    [T, "yellow"],
    [O, "blue"],
    [L, "purple"],
    [I, "cyan"],
    [J, "orange"]
];

// generate random pieces

function randomPiece() {
    let r = Math.floor(Math.random() * PIECES.length) // 0 -> 6
    return new Piece(PIECES[r][0], PIECES[r][1]);
}

class Piece {
    constructor(tetromino, color) {
        this.tetromino = tetromino;
        this.color = color;

        this.tetrominoN = 0; // we start from the first pattern (1 trong 4 góc quay) mặc định khi sinh ra thì là hình 1
        this.activeTetromino = this.tetromino[this.tetrominoN];

        this.x = 3 // Tọa độ x ban đầu của hình
        this.y = -2; // Tọa độ y ban đầu của hình
    }

    fill(color) {
        for (r = 0; r < this.activeTetromino.length; r++) {
            for (c = 0; c < this.activeTetromino.length; c++) {
                if (this.activeTetromino[r][c]) {
                    drawSquare(this.x + c, this.y + r, color);
                }
            }
        }
    }

    draw() {
        this.fill(this.color);
    }
    
    unDraw() {
        this.fill(VACANT);
    }

    moveDown() {
        this.unDraw();
        this.y++;
        this.draw();
    }

    moveRight() {
        if (!this.collision(1, 0, this.activeTetromino)){
            this.unDraw();
            this.x++;
            this.draw();
        }
    }
    
    // move Left the piece
    moveLeft() {
        if (!this.collision(-1, 0, this.activeTetromino)){
            this.unDraw();
            this.x--;
            this.draw();
        }
    }

    collision(x, y, piece) {
        for (r = 0; r < piece.length; r++) {
            for (c = 0; c < piece.length; c++) {
                // if the square is empty, we skip it
                if (!piece[r][c]) {
                    continue;
                }
                // coordinates of the piece after movement
                let newX = this.x + c + x;
                let newY = this.y + r + y;
    
                // conditions
                if (newX < 0 || newX >= COL || newY >= ROW) {
                    return true;
                }
                // skip newY < 0; board[-1] will crush our game
                if (newY < 0) {
                    continue;
                }
                // check if there is a locked piece alrady in place
                if (board[newY][newX] != VACANT) {
                    return true;
                }
            }
        }
        return false;
    }
}

let p = randomPiece();

document.addEventListener("keydown", CONTROL);
function CONTROL(event) {
    if (event.keyCode == 37) {
        p.moveLeft();
        dropStart = Date.now();
    } else if (event.keyCode == 38) {
        p.rotate();
        dropStart = Date.now();
    } else if (event.keyCode == 39) {
        p.moveRight();
        dropStart = Date.now();
    } else if (event.keyCode == 40) {
        p.moveDown();
    }
}

let dropStart = Date.now();
let gameOver = false;

function drop() {
    let now = Date.now();
    let delta = now - dropStart;
    if (delta > 1000) {
        p.moveDown();
        dropStart = Date.now();
    }
    if (!gameOver) {
        requestAnimationFrame(drop);
    }
}

drop();