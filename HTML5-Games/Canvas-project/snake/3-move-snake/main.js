//Setting the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

//Setting the block
let blockSize = 20;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;


//Utility function
function drawBorder() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(0, height - blockSize, width, blockSize);
}

function drawScore() {
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Điểm: ${score}`, blockSize * 2, blockSize * 3);
}

//Class Block
class Block {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    drawSquare(color) {
        let x = this.col * blockSize;
        let y = this.row * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    }
    drawCircle(color) {
        // tính toán vị trí tâm
        let centerX = this.col * blockSize + blockSize / 2;
        let centerY = this.row * blockSize + blockSize / 2;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, blockSize / 2, 0, Math.PI * 2, false);
        ctx.fill();
    }
}


//Class Apple
class Apple {
    constructor(color) {
        this.position = new Block(10, 10);
        this.color = color;
    }

    draw() {
        this.position.drawCircle(this.color);
    }
}


//Class Snake
class Snake {
    constructor(color) {
        this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
        this.direction = "right";
        this.color = color;
    }

    draw() {
        this.segments.forEach(segment => segment.drawSquare(this.color));
        this.segments[0].drawSquare('green');
    }


    move() {
        let head = this.segments[0];
        let newHead;
        if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row);
        } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1);
        } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row);
        } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1);
        }

        // Còn không thì thêm 1 block
        this.segments.unshift(newHead);
        this.segments.pop();
    }

    setDirection(newDirection) {
        if (
            this.direction === "up" && newDirection === "down" ||
            this.direction === "right" && newDirection === "left" ||
            this.direction === "down" && newDirection === "up" ||
            this.direction === "left" && newDirection === "right"
        ) return;
        
        this.direction = newDirection;
    };
}

let directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

document.addEventListener('keydown', event => {
    let newDirection = directions[event.keyCode];
    if (newDirection)
        snake.setDirection(newDirection);
});

let score;
let snake;
let apple;
let snakeSpeed;
let interval;


//start Game function
function init() {
    score = 0;
    snake = new Snake('yellow');
    apple = new Apple('red');
    snakeSpeed = 100;

    interval = setInterval(function () {
        ctx.clearRect(0, 0, width, height);
        drawScore();
        drawBorder();
        snake.move();
        snake.draw();
        apple.draw();
    }, snakeSpeed);
}

window.onload = init;