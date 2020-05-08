
let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 600;
canvas.height = 600;
let ctx = canvas.getContext("2d");

const WIDTH = 50;
const HEIGHT = 50;
const RANGE = 50;
const BLACK = "#000";
const WHITE = "#fff";
const COL = 8;
const ROW = 8;

ctx.translate( canvas.width/2, canvas.width/2 );
ctx.rotate( Math.PI/4 );
ctx.translate( -canvas.width/2, -canvas.width/2 );

for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
        if ((i + j) % 2 == 0) {
            ctx.fillStyle = BLACK;
            ctx.fillRect(i * RANGE + 100, j * RANGE + 100, WIDTH, HEIGHT);
        }
        if ((i + j) % 2 == 1) {
            ctx.fillStyle = WHITE;
            ctx.fillRect(i * RANGE + 100, j * RANGE + 100, WIDTH, HEIGHT);
        }
    }
}

