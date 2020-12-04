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
    }
    draw() {
        ctx.beginPath();
        if(state.current == state.getReady) {
            if(frame % 35 == 0) {
                this.i++;
                this.i = this.i % 3;
            }
        }
        
        ctx.drawImage(sprites, this.animate[this.i].sX, this.animate[this.i].sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
    }
}

let bird = new Bird(150, 340)
