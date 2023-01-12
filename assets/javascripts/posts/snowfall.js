
const baseYSpeed = 0.5

const snowflakes = []

function setup() {
	const length = max(window.innerHeight, window.innerWidth)
	const canvasLength = Number(document.querySelector('.input').getAttribute('snowfall-canvas-length') ?? length)
	const canvas = createCanvas(canvasLength, canvasLength);

	const parentID = document.querySelector('.input').getAttribute('snowfall-parentId')

	console.log(parentID)
	if (parentID) {
		canvas.parent(parentID);
	}
}

function draw() {
	const opacity = Number(document.querySelector('.input').getAttribute('snowfall-opacity') ?? '0')
	background(opacity, 200);

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

