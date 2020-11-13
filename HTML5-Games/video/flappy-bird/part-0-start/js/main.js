let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d')

canvas.height = 710;
canvas.width = 530;
canvas.style.border = '1px solid black'

const sprites = new Image()
sprites.src = './sprites.png'

let game = 'start'

//Draw
function draw() {
    if(game == 'start') {
        start.draw()
    }
    
}

function update() {
    updateArrGround();
    updateArrPipes();
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    update();
}

animate();