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

//start Game function
function init() {
    score = 0;
    drawScore();
    drawBorder();
}

window.onload = init;