
//Random
function random(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

let arrPipes = [];

//Pipes
class Pipes {
    constructor(cX, cY, space) {
        this.cX = cX;
        this.cY = cY;
        this.space = space;
        this.sXt = 0;
        this.sYt = 0;
        this.sXb = 1261;
        this.sYb = 0;
        this.sW = 82;
        this.sH = 710;
        this.cW = 82;
        this.cH = 710;
        this.dx = -2
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sXt, this.sYt, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH);
        ctx.drawImage(sprites, this.sXb, this.sYb, this.sW, this.sH, this.cX, this.cY + this.cH + this.space, this.cW, this.cH);
    }
}

function newPipes() {
    for(let i = 1; i < 4; i ++) {
        let pipes = new Pipes(random(530, 600)*i, random(-660, -300), 200)
        arrPipes.push(pipes);
    }
}

newPipes();

function drawArrPipes() {
    arrPipes.forEach(pipes => {
        pipes.draw()
    })
}

function updateArrPipes() {
    arrPipes.forEach(pipes => {       
        pipes.cX += pipes.dx
    })
    if(arrPipes[0].cX <= -82){
        arrPipes.shift()
        let pipes = new Pipes(arrPipes[arrPipes.length - 1].cX + random(400, 500), random(-660, -300), random(200, 150));
        arrPipes.push(pipes)
    }
}
