const canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 600;
canvas.style.border = "20px solid gray";

const c = canvas.getContext('2d');


let block = 20;
let col = canvas.width / block;
let row = canvas.height / block;

function drawText() {
    c.beginPath();
    c.font = "bold 24px Arial";
    c.fillText(`Điểm: ${score}`, 20, 40);
}

// Khởi tạo class Block
class Block {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    drawRect(color) {
        let x = this.col * block;
        let y = this.row * block;

        c.beginPath();
        c.fillStyle = color;
        c.rect(x, y, block, block);
        c.fill();
    }

    drawCircle(color) {
        let x = this.col * block + block/2;
        let y = this.row * block + block/2;

        c.beginPath();
        c.fillStyle = color;
        c.arc(x, y, block/2, 0, Math.PI * 2, false);
        c.fill();
    }

    equal(block) {
        return this.col == block.col && this.row == block.row;
    }
}

// Class food
class Food {
    constructor(color) {
        this.position = new Block(15,7);
        this.color = color;
    }
    draw() {
        this.position.drawCircle(this.color);
    }

    random() {
        let colRandom = Math.floor(Math.random() * col);
        let rowRandom = Math.floor(Math.random() * row);

        this.position = new Block(colRandom,rowRandom);
    }
}

// Class snake
class Snake {
    constructor(color) {
        this.segments = [new Block(10,5), new Block(9,5), new Block(8,5)];
        this.color = color;
        this.direction = 'right';
    }
    draw() {
        this.segments.forEach(s => s.drawRect(this.color));
        this.segments[0].drawRect('green');
    }

    move() {
        let head = this.segments[0];
        let newHead;
        if(this.direction == 'right') {
            newHead = new Block(head.col + 1, head.row)
        } else if(this.direction == 'left') {
            newHead = new Block(head.col - 1, head.row)
        } else if(this.direction == 'top') {
            newHead = new Block(head.col, head.row - 1)
        } else if(this.direction == 'bottom') {
            newHead = new Block(head.col, head.row + 1)
        }

        this.segments.unshift(newHead);

        if(head.equal(food.position)) {
            score++;
            food.random();
        } else {
            this.segments.pop();
        }
    }

    checkCollision() {
        // Kiểm tra va chạm của rắn với thành game board
        
        // Kiểm tra va chạm của rắn với thân
    }
}

let directions = {
    37 : 'left',
    38 : 'top',
    39 : 'right',
    40 : 'bottom'
}

document.addEventListener('keydown', function(e) {
    let newDirection = directions[e.keyCode];

    if(newDirection) {
        // Cập nhật lại cái direction cho snake
        if(
            snake.direction == 'right' && newDirection == 'left' ||
            snake.direction == 'left' && newDirection == 'right' ||
            snake.direction == 'top' && newDirection == 'bottom' ||
            snake.direction == 'bottom' && newDirection == 'top'
        ) {
            return;
        } else {
            snake.direction = newDirection
        }
    }
})

let score;
let food;
let snake;
let interval;

// Function khởi tạo game
function init() {
    score = 0;
    food = new Food('red');
    snake = new Snake('yellow');

    interval = setInterval(function() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawText();
        food.draw();
        snake.draw();
        snake.move();
    }, 100);    
}

window.onload = init;
