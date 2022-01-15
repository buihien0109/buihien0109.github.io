//canvas h: 710; w: 530
const DEGREE = Math.PI / 180
const POINT = new Audio('./sound/sfx_point.wav')
const HIT = new Audio('./sound/sfx_hit.wav')
let executed = false;

let game = 'start'

let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d')

canvas.height = 710;
canvas.width = 530;

const sprites = new Image()
sprites.src = './img/sprites.png'

//Bg
const bg = { 
    sX: [163, 393],
    sY: 0,
    sW: 229,
    sH: 625,
    cX: 0,
    cY: 0,
    cW: 229,
    cH: 625,
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX[0], this.sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
        ctx.drawImage(sprites, this.sX[0], this.sY, this.sW, this.sH, this.cX + 229, this.cY, this.cW, this.cH)
        ctx.drawImage(sprites, this.sX[0], this.sY, this.sW, this.sH, this.cX + 458, this.cY, this.cW, this.cH)
    }
}
//Ground
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
let arrGround = [];

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
//Bird

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
        this.i = 0
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

//Screen
const start = {
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(sprites, 1012, 0, 228, 61, canvas.width/2 - 114, 50, 228, 61)
        ctx.drawImage(sprites, 1012, 62, 236, 64, canvas.width/2- 118, 200, 236, 64)
        ctx.drawImage(sprites, 855, 157, 140, 126, canvas.width/2- 70, 350, 140, 126)
    }
}
const end = {
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(sprites, 1012, 126, 246, 54, canvas.width/2 - 123, 200, 246, 54)
        ctx.drawImage(sprites, 624, 432, 290, 145, canvas.width/2 - 145, 350, 290, 145)
        ctx.drawImage(sprites, 624, 578, 83, 46, canvas.width/2 - 41.5, 500, 83, 46)
    }
}
//Number
const arrNumber = [
    {name: 0, sX: 1013, sY: 181,sW: 52,sH: 80,cW: 52,cH: 80},
    {name: 1, sX: 1080, sY: 181,sW: 32,sH: 80,cW: 32,cH: 80},
    {name: 2, sX: 1127, sY: 181,sW: 52,sH: 79,cW: 52,cH: 79},
    {name: 3, sX: 1184, sY: 181,sW: 52,sH: 79,cW: 52,cH: 79},
    {name: 4, sX: 1013, sY: 265,sW: 52,sH: 79,cW: 52,cH: 79},
    {name: 5, sX: 1070, sY: 265,sW: 52,sH: 79,cW: 52,cH: 79},
    {name: 6, sX: 1127, sY: 265,sW: 52,sH: 79,cW: 52,cH: 79},
    {name: 7, sX: 1184, sY: 265,sW: 52,sH: 79,cW: 52,cH: 79},
    {name: 8, sX: 1013, sY: 349,sW: 52,sH: 79,cW: 52,cH: 79},
    {name: 9, sX: 1070, sY: 349,sW: 52,sH: 79,cW: 52,cH: 79}
]
class Score {
    constructor(value, cX, cY) {
        this.value = value;
        this.split
        this.cX = cX;
        this.cY = cY;
    }
    draw() {
        ctx.beginPath();
        if (this.value >= 10 ){
            this.split = (this.value.toString()).split('');
            arrNumber.forEach(number => {
                if(this.split[0] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, canvas.width/2 - 52, 60, number.cW, number.cH);
                }
                if(this.split[1] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, canvas.width/2 + 2, 60, number.cW, number.cH);
                }
            })
        }
        else {
            this.split = this.value.toString();
            arrNumber.forEach(number => {
                if(this.split[0] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, canvas.width/2 - 26, 60, number.cW, number.cH);
                }
            })
        }
    }
    drawSmall() {
        ctx.beginPath();
        if (this.value >= 10 ){
            this.split = (this.value.toString()).split('');
            arrNumber.forEach(number => {
                if(this.split[0] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, this.cX, this.cY, number.cW/3, number.cH/3);
                }
                if(this.split[1] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, this.cX + 18, this.cY, number.cW/3, number.cH/3);
                }
            })
        }
        else {
            this.split = this.value.toString();
            arrNumber.forEach(number => {
                if(this.split[0] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, this.cX + 18, this.cY, number.cW/3, number.cH/3);
                }
            })
        }
    }
}
let score = new Score(0, 340, 391);
let maxScore = new Score(0, 340, 443);

function addScore() {
    score.value++;
    POINT.play()
    maxScore.value = Math.max(score.value, maxScore.value);
}
//medal -- huy hiệu
class Medal {
    constructor(i) {
        this.sX = 80;
        this.sY = [0, 58, 114];             // 0 là bạc, 1 là vàng, 2 là k có gì
        this.sW = 53;
        this.sH = 54;
        this.cX = canvas.width/2 - 97;
        this.cY = 407;
        this.cW = 53;
        this.cH = 54;
        this.i = i;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX, this.sY[this.i], this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
    }
    update() {
        if (score.value == 0) {
            medal.i = 2;
            return;
        }
        if (score.value == maxScore.value){
            medal.i = 1;
        }
        else if (score.value >= maxScore.value/2 && score.value < maxScore.value) {
            medal.i = 0;
        }
        else {
            medal.i = 2;
        }
    }
}
let medal = new Medal(0);


//Random
function random(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

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

let arrPipes = [];
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
        arrPipes.splice(0, 1)
        let pipes = new Pipes(arrPipes[arrPipes.length - 1].cX + random(400, 500), random(-660, -300), random(200, 150));
        arrPipes.push(pipes)
    }
}

//Control

addEventListener('click', function click() {
    switch (game) {
        case 'start':
            game = 'play';
            break;
        case 'play':
            bird.v = -8;
            break;
        case 'end':
            if (event.offsetX > canvas.width/2 - 41.5
                && event.offsetX < canvas.width/2 + 41.5
                && event.offsetY > 500
                && event.offsetY < 546) {
                    score.value = 0; 
                    arrPipes = [];
                    newPipes();
                    bird.cY = canvas.height / 2 - 12;
                    bird.rotate = 0;
                    bird.v = 0;
                    game = 'start';
                    executed = false;
                }
    }
})




//==============================================================================================================================================

//Update
function update() {
    if(game == 'play') {
        updateArrPipes();
        updateArrGround();
    }
    bird.update();
    medal.update();
}

//Draw
function draw() {
    bg.draw();
    if(game == 'start') {
        start.draw()
    }
    drawArrPipes();
    if(game == 'play') {
        score.draw(); 
    }
    drawArrGround();
    bird.draw();
    if(game == 'end') {
        end.draw();
        score.drawSmall();
        maxScore.drawSmall();
        medal.draw();
    }
}

//Animate
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame ++;
    update();
    draw();
}
animate()