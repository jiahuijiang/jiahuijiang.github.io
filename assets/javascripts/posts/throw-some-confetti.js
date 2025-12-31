const confettiBaseYSpeed = 0.5
const xWindSpeedMultiplier = 0.03
const yWindSpeedMultiplier = 0.05

const confetti = []

let sketchConfetti = function (p) {
	p.setup = function () {
		const length = p.max(window.innerHeight, window.innerWidth)
		const canvasLength = Number(document.querySelector('.input').getAttribute('confetti-canvas-length') ?? length)
		p.createCanvas(canvasLength, canvasLength);

		for (let i = 0; i < canvasLength / 2; i++) {
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
			this.x = p.random(p.width);
			this.y = p.random(-50, p.width)
			this.xSpeedFromWind = 0;
			this.ySpeedFromWind = 0;
			this.r = p.random(5, 12);
			this.ySpeed = confettiBaseYSpeed * Math.log(this.r, 2);
			this.shape = Math.floor(p.random(3)) + 1
			this.color = this.confettiColors[Math.floor(p.random(this.confettiColors.length))]
		}

		show() {
			p.push()
			p.translate(this.x, this.y);

			if (p.mouseX < p.width && p.mouseX > 0 && p.mouseY < p.height && p.mouseY > 0) {
				if (p.abs(this.x - p.mouseX) < 100) {
					this.ySpeedFromWind = getWindSpeed().speedY / (p.log(p.abs(this.y - p.mouseY) + 1) + 1) * p.sqrt(p.abs(p.abs(this.x - p.mouseX) - 100))* yWindSpeedMultiplier
				}
				if (p.abs(this.y - p.mouseY) < 100) {
					this.xSpeedFromWind = getWindSpeed().speedX / (p.log(p.abs(this.x - p.mouseX) + 1) + 1) * p.sqrt(p.abs(p.abs(this.y - p.mouseY) - 100))* xWindSpeedMultiplier
				}
			}
			this.xSpeedFromWind *= 0.99

			p.translate(0, this.ySpeed);

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
			this.x += (this.xSpeedFromWind)

			if (this.y > p.height || this.x < 0 || this.x > p.width) {
				this.x = p.random(p.width);
				this.y = p.random(-100, 0);
				this.xSpeedFromWind = 0;
				this.ySpeedFromWind = 0;
			}
		}
	}

	function getWindSpeed() {
		return {
			speedX: p.mouseX - p.pmouseX,
			speedY: p.mouseY - p.pmouseY > 0 ? p.mouseY - p.pmouseY : 2 * (p.mouseY - p.pmouseY)
		}
	}
}

new p5(sketchConfetti, 'confetti-parent')

