const canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 600;
canvas.style.border = "1px solid gray";

const ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height

let blockSize = 20;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;

function drawBorder() {
    ctx.fillStyle = "grey";
    ctx.rect(0, 0, width, blockSize);
    ctx.rect(width-blockSize, 0, blockSize, height);
    ctx.rect(0, 0, blockSize, height);
    ctx.rect(0, height-blockSize, width, blockSize);
    ctx.fill();
}

function drawScore() {
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Điểm: ${score}`, blockSize * 2, blockSize * 3);
}

let score;

function init() {
    score = 0;
    drawBorder();
    drawScore();
}

window.onload = init;
