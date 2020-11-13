let arrGround = [];

class Ground {
    constructor(cX, cY) {
        this.cX = cX;
        this.cY = cY;
        this.sX = 624, 
        this.sY = [0, 144, 288];
        this.sW = 215;
        this.sH = 143;
        this.cW = 215;
        this.cH = 143;
        this.dx = -2;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX, this.sY[0], this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
    }
}

for (let i = 0; i < 4; i ++) {
    let ground = new Ground(0 + 215*i, 625);
    arrGround.push(ground)  
}

function drawArrGround(){
    arrGround.forEach(ground => {
        ground.draw()
    })
}

function updateArrGround() {
    arrGround.forEach(ground => {
        ground.cX += ground.dx
    })
    if(arrGround[0].cX <= -336){
        arrGround.splice(0, 1)
        let ground = new Ground(arrGround[2].cX + 215, 625);
        arrGround.push(ground)
    }
}