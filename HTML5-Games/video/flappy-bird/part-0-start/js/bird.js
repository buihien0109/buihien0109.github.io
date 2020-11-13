let frame = 0;

class Bird {
    constructor(cX, cY) {
        this.cX = cX;
        this.cY = cY;
        this.animate = [
            {sX: 840, sY: 0},
            {sX: 900, sY: 0},
            {sX: 960, sY: 0}
        ]
        this.sW = 51;
        this.sH = 36;
        this.cW = 51;
        this.cH = 36;
        this.i = 0 // 0/1/2 -Trang thai dap canh cua bird
        this.a = 0.5;                 
        this.v = 0;                   //v là vận tốc
        this.rotate = 0;               //góc quay 
    }
    draw() {
        ctx.beginPath();
        if(game == 'start') {
            if(frame % 35 == 0) {
                this.i++;
                if(this.i > 2) {
                    this.i = 0
                }
            }
        }
        if(game == 'play') {
            if(frame % 16 == 0) {
                this.i++;
                if(this.i > 2) {
                    this.i = 0
                }
            }
        }
        
        ctx.save();
        ctx.translate(this.cX, this.cY)
        ctx.rotate(this.rotate * DEGREE)
        ctx.translate(-(this.cX + 17) , -(this.cY + 12))
        ctx.drawImage(sprites, this.animate[this.i].sX, this.animate[this.i].sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
        ctx.restore()
    }
    update() {
        if (game == 'play' || game == 'end') {
            if (this.v < 0 ){
                this.rotate += this.v * 5
            }
            else {
                this.rotate += this.v / 5
            }
            if(this.rotate >= 60){
                this.rotate =60
            }
            if(this.rotate <= -20){
                this.rotate = -20
            }
            this.v += this.a
            this.cY += this.v
            if (bird.cX + 51 > arrPipes[0].cX + 20
                && bird.cX < arrPipes[0].cX + 82
                &&(bird.cY < arrPipes[0].cY + 720 || bird.cY + 36 > arrPipes[0].cY + 720 + arrPipes[0].space)) {
                    if (!executed) {
                        HIT.play();
                        executed = true;
                    }
                    game = 'end';
            }
            if(bird.cX == arrPipes[0].cX + 82 || bird.cX == arrPipes[0].cX + 81 ) {
                addScore();
            }
        }
        if (this.cY + this.v >= 590) {
            this.cY = 625;
            this.v = 0;
            game = 'end';
        }
        
    }
}
let bird = new Bird(150, canvas.height / 2 - 12)
