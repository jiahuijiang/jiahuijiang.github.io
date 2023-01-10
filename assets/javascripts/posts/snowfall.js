
const baseYSpeed = 0.5

const snowflakes = []

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

}


function draw() {
	background(0);

	if (snowflakes.length < 700) {
		for (let i = 0; i < 1; i++) {
			snowflakes.push(new Snowflake());
		}
	}

	for (const flake of snowflakes) {
		flake.fall();
		flake.show()
	}
}

class Snowflake {
	constructor() {
		this.initialX = random(width);
		this.y = -50
		this.initialAngle = random(0, 2 * Math.PI);
		this.r = random(2, 7);
		this.ySpeed = baseYSpeed * Math.log(this.r, 2);
		this.amplitude = sqrt(random(pow(width / 2,2)))
	}

	fall() {
		if (this.y > height) {
			this.y = -50;
		}

		this.x = this.initialX + Math.sin(this.initialAngle + this.y * this.ySpeed / 100) * this.amplitude;
		this.y += this.ySpeed
	}

	show() {
		stroke(255);
		circle(this.x, this.y, this.r);
	}
}

