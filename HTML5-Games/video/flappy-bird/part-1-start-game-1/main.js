let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d')

canvas.height = 710;
canvas.width = 530;

const sprites = new Image()
sprites.src = './img/sprites.png'

//Screen
const start = {
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(sprites, 1012, 0, 228, 61, canvas.width/2 - 114, 50, 228, 61)
        ctx.drawImage(sprites, 1012, 62, 236, 64, canvas.width/2- 118, 200, 236, 64)
        ctx.drawImage(sprites, 855, 157, 140, 126, canvas.width/2- 70, 350, 140, 126)
    }
}

// Background
const bg = {
    sX: 163,
    sY: 0,
    sW: 229,
    sH: 625,
    cX: 0,
    cY: 0,
    cW: 229,
    cH: 625,
    draw: function () {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX + 229, this.cY, this.cW, this.cH)
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX + 458, this.cY, this.cW, this.cH)
    }
}

//Ground
class Ground {
    constructor(cX, cY) {
        this.cX = cX;
        this.cY = cY;
        this.sX = 624, 
        this.sY = 0;
        this.sW = 215;
        this.sH = 143;
        this.cW = 215;
        this.cH = 143;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
    }
}

let arrGround = [];

for (let i = 0; i < 4; i ++) {
    let ground = new Ground(215*i, 625);
    arrGround.push(ground)  
}

function drawArrGround(){
    arrGround.forEach(ground => {
        ground.draw()
    })
}


//Draw
function draw() {
    bg.draw();
    drawArrGround();
    start.draw();
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
}

animate();