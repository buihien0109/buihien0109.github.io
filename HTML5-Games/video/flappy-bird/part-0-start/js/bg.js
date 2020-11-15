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
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX + this.sW, this.cY, this.cW, this.cH)
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX + this.sW * 2, this.cY, this.cW, this.cH)
    }
}