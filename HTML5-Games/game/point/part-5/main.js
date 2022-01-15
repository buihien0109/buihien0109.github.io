class Avatar {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        this.score = 0;

        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw(width, color) {
        c.beginPath();
        c.lineWidth = width;
        c.fillStyle = this.color;
        c.strokeStyle = color;

        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.stroke();
        c.fill();
        c.closePath();
    }

    drawScore() {
        c.beginPath();
        c.font = "40px Arial";
        c.fillStyle = '#222';
        c.fillText(this.score, 30, canvas.height - 30);
        c.closePath();
    }

    update() {
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocity.x *= -1;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.velocity.y *= -1;
        }
    }

    touch(avatar) {
        let kc = Math.sqrt((this.x - avatar.x) ** 2 + (this.y - avatar.y) ** 2)
        let r = this.radius + avatar.radius
        if (kc < r) {
            return true
        } else {
            return false
        }
    }
}

let canvas;
let c;
let avatar;
let arrayPoint;
let numPoint = 40;

function createX() {
    return Math.floor(Math.random() * canvas.width);
}

function createY() {
    return Math.floor(Math.random() * canvas.height);
}

function updateGame() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    arrayPoint.forEach((ava, index) => {
        ava.draw(3, '#696969');

        if (ava.touch(avatar)) {
            arrayPoint.splice(index, 1)
            avatar.score++;

            if (avatar.score == numPoint) {
                alert('Thắng rồi. Chàng trai ơi !!!!!!!!!');
            }
        }
    });

    avatar.update();
    avatar.draw(5, '#696969');
    avatar.drawScore();
}

function init() {
    arrayPoint = [];

    canvas = document.getElementById('canvas');
    canvas.width = 1000;
    canvas.height = 600;

    c = canvas.getContext('2d');

    avatar = new Avatar(30, 30, 20, "yellow")
    avatar.draw(5, '#696969');
    avatar.drawScore();

    for (let i = 0; i < numPoint; i++) {
        arrayPoint.push(new Avatar(createX(), createY(), 7, "orange"));
    }

    arrayPoint.forEach(ava => ava.draw(3, '#696969'));

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37) {
            avatar.velocity.x = -2;
            avatar.velocity.y = 0;
        }
        if (event.keyCode == 38) {
            avatar.velocity.x = 0;
            avatar.velocity.y = -2;
        }
        if (event.keyCode == 39) {
            avatar.velocity.x = 2;
            avatar.velocity.y = 0;
        }
        if (event.keyCode == 40) {
            avatar.velocity.x = 0;
            avatar.velocity.y = 2;
        }
    })

    function animate() {
        requestAnimationFrame(animate);
        updateGame();
    }
    animate();
}

init();