let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d')

canvas.height = 710;
canvas.width = 530;
canvas.style.border = '1px solid black'

const sprites = new Image()
sprites.src = './sprites.png'


const bg = {
    sX: [163, 393],
    sY: 0,
    sW: 229,
    sH: 625,
    cX: 0,
    cY: 0,
    cW: 229,
    cH: 625,
    draw: function () {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX[0], this.sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
        ctx.drawImage(sprites, this.sX[0], this.sY, this.sW, this.sH, this.cX + 229, this.cY, this.cW, this.cH)
        ctx.drawImage(sprites, this.sX[0], this.sY, this.sW, this.sH, this.cX + 458, this.cY, this.cW, this.cH)
    }
}

//Draw
function draw() {
    bg.draw();

}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
}

animate();