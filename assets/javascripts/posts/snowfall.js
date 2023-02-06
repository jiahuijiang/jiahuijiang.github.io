
const snowFallBaseYSpeed = 0.5

let sketchSnowfall = function (p) {
	const snowflakes = []

	p.setup = function() {
		const length = p.max(window.innerHeight, window.innerWidth)
		const canvasLength = Number(document.querySelector('.input').getAttribute('snowfall-canvas-length') ?? length)

		p.createCanvas(canvasLength, canvasLength);
	}

	p.draw = function () {
		const opacity = Number(document.querySelector('.input').getAttribute('snowfall-opacity') ?? '0')
		p.background(opacity, 200);

		if (snowflakes.length < p.canvas.height) {
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
			this.initialX = p.random(p.width);
			this.y = p.random(-100, 0)
			this.initialAngle = p.random(0, 2 * Math.PI);
			this.r = p.random(2, 7);
			this.ySpeed = snowFallBaseYSpeed * Math.log(this.r, 2);
			this.amplitude = p.sqrt(p.random(p.pow(p.width / 2,2)))
		}

		fall() {
			if (this.y > p.height) {
				this.y = -50;
			}

			this.x = this.initialX + Math.sin(this.initialAngle + this.y * this.ySpeed / 100) * this.amplitude;
			this.y += this.ySpeed
		}

		show() {
			p.stroke(255);
			p.circle(this.x, this.y, this.r);
		}
	}
}

new p5(sketchSnowfall, document.querySelector('.input').getAttribute('snowfall-parent') ?? 'snowfall-parent')


