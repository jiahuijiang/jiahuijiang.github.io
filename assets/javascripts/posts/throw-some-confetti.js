const confettiBaseYSpeed = 0.5
const yWindSpeedMultiplier = 0.1

const confetti = []

let sketchConfetti = function (p) {
	p.setup = function () {
		const length = p.max(window.innerHeight, window.innerWidth)
		const canvasLength = Number(document.querySelector('.input').getAttribute('confetti-canvas-length') ?? length)
		p.createCanvas(canvasLength, canvasLength);

		for (let i = 0; i < 150; i++) {
			confetti.push(new Confetti());
		}
	}

	p.draw = function() {
		const opacity = Number(document.querySelector('.input').getAttribute('confetti-opacity') ?? '0')
		p.background(opacity, 200);

		for (const oneConfetti of confetti) {
			oneConfetti.show()
		}
	}

	class Confetti {
		confettiColors = [
			p.color(168,100,253),
			p.color(41,205,255),
			p.color(120,255,68),
			p.color(255,113,141),
			p.color(253,255,106),
		]

		constructor() {
			this.time = p.random(1, 100)
			this.x = p.random(p.width * 3 / 4) + p.width / 8;
			this.y = p.random(0, p.width)
			this.ySpeedFromWind = 0;
			this.initialAngle = p.random(0, 2 * Math.PI);
			this.r = p.random(5, 12);
			this.ySpeed = confettiBaseYSpeed * Math.log(this.r, 2);
			this.amplitude = p.sqrt(p.random(p.pow(p.width / 3,2)))
			this.shape = Math.floor(p.random(3)) + 1
			this.color = this.confettiColors[Math.floor(p.random(this.confettiColors.length))]
		}

		show() {
			// resets when it hits the bottom
			if (this.y > p.height) {
				this.x = p.random(p.width / 2) + p.width / 4;
				this.y = -50;
			}

			p.push()
			p.translate(this.x, this.y);

			if (p.winMouseX < p.width && p.winMouseX > 0 && p.winMouseY < p.height && p.winMouseY > 0) {
				if (p.abs(this.x - p.winMouseX) < 100) {
					this.ySpeedFromWind = getWindSpeed().speedY / (p.log(p.abs(this.y - p.winMouseY) + 1) + 1) * p.sqrt(p.abs(p.abs(this.x - p.winMouseX) - 100))* yWindSpeedMultiplier
				}
			}

			p.translate(this.amplitude * p.sin(this.initialAngle + this.time / 10), this.ySpeed);

			p.rotate(this.time);
			p.rectMode(p.CENTER);
			p.scale(p.cos(this.time / 4), p.sin(this.time / 4));


			p.noStroke()
			p.fill(this.color)
			if (this.shape === 1) {
				p.circle(0, 0, this.r);
			} else if (this.shape === 2) {
				p.rect(0, 0, this.r, this.r);
			} else {
				p.triangle(0, 0, this.r, 0, this.r / 2, this.r);
			}
			p.pop()

			this.time = this.time + 0.1;
			this.y += (this.ySpeed + this.ySpeedFromWind)
		}
	}

	function getWindSpeed() {
		return {
			speedX: p.winMouseX - p.pwinMouseX,
			speedY: p.winMouseY -p. pwinMouseY
		}
	}
}

new p5(sketchConfetti, 'confetti-parent')

