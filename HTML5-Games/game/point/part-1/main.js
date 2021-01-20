class Avatar {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;

		this.score = 0;
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
		c.fillStyle = "#222";
		c.fillText(this.score, 30, canvas.height - 30);
		c.closePath();
	}
}

let canvas;
let c;
let avatar

function init() {
	canvas = document.getElementById("canvas");
	canvas.width = 1000;
	canvas.height = 600;

	c = canvas.getContext("2d");

	avatar = new Avatar(30, 30, 20, "yellow");
	avatar.draw(5, "#696969");
	avatar.drawScore();
}

window.onload = init;