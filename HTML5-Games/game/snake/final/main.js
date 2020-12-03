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

    equal(otherBlocks) {
        return this.col === otherBlocks.col && this.row === otherBlocks.row;
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

    move() {
        let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
        let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
        this.position = new Block(randomCol, randomRow);
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

        // Nếu va chạm với thành hoặc thân rắn thì game over
        if (this.checkCollision(newHead)) {
            gameOver();
            return;
        }

        // Còn không thì thêm 1 block
        this.segments.unshift(newHead);

        // Nếu va chạm với apple
        if (newHead.equal(apple.position)) {
            score++
            apple.move();
        } else {
            this.segments.pop();
        }

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

    checkCollision(head) {
        // Kiểm tra khi va chạm với thành game
        let leftCollision = (head.col === 0);
        let topCollision = (head.row === 0);
        let rightCollision = (head.col === widthInBlocks - 1);
        let bottomCollision = (head.row === heightInBlocks - 1);
        let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

        // Kiểm tra khi va chạm với thân rắn
        let selfCollision = false;
        for (let i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            }
        }

        // Trả về kq xem có va chạm hay không
        return wallCollision || selfCollision;
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


//Check the game over
function gameOver() {
    clearInterval(intervalId);
    console.log('end game');
};

let score, snake, apple, snakeSpeed;
//start Game function
function init() {
    score = 0;
    snake = new Snake('yellow');
    apple = new Apple('red');
    snakeSpeed = 100;

    intervalId = setInterval(function () {
        ctx.clearRect(0, 0, width, height);
        drawScore();
        snake.move();
        snake.draw();
        apple.draw();
        drawBorder();
    }, snakeSpeed);
}

window.onload = init;