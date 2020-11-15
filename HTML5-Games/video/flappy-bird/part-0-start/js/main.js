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
        bg.draw();
        drawArrGround();
        start.draw();
        bird.draw();
    }
    
}

// function update() {
//     bird.update();
// }

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;
    draw();
    // update();
}

animate();