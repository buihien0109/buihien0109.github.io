const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score = 0;
let isRunning = true;

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
};

// Create paddle props
const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
};

// Draw ball on canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
}

// Draw score oon canvas
function drawScore() {
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Move ball on canvas
function moveBall() {
    if(isRunning) {
        ball.x += ball.dx;
        ball.y += ball.dy;
    
        // Wall collision (right/left)
        if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
            ball.dx *= -1; // ball.dx = ball.dx * -1
        }
    
        // Wall collision (top/bottom)
        if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
            ball.dy *= -1;
        }
    
        // console.log(ball.x, ball.y);
    
        // Paddle collision
        if (
            ball.x - ball.size > paddle.x &&
            ball.x + ball.size < paddle.x + paddle.w &&
            ball.y + ball.size > paddle.y
        ) {
            ball.dy = -ball.speed;
        }
    }

    // Hit bottom wall - Lose
    if (ball.y + ball.size > canvas.height) {
        // showAllBricks();
        // score = 0;
        console.log('End game');
        isRunning = false;
    }
}

function movePaddle() {
    paddle.x += paddle.dx;

    if (paddle.x + paddle.w > canvas.width) {
        paddle.x = canvas.width - paddle.w;
    }

    if (paddle.x < 0) {
        paddle.x = 0;
    }
}

// Keydown event
function keyDown(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        paddle.dx = paddle.speed;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        paddle.dx = -paddle.speed;
    }
}

// Keyup event
function keyUp(e) {
    if (
        e.key === "Right" ||
        e.key === "ArrowRight" ||
        e.key === "Left" ||
        e.key === "ArrowLeft"
    ) {
        paddle.dx = 0;
    }
}

// Keyboard event handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddle();
    drawScore();
}

// Update canvas drawing and animation
function update() {
    movePaddle();
    moveBall()
    // Draw everything
    draw();

    requestAnimationFrame(update);
}

update();