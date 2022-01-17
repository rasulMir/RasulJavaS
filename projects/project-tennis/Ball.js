import Rackets from "./Rackets.js";

class Ball extends Rackets {
	constructor(func) {
		super();
		this.ball = document.querySelector('.ball');
		this.init = func;
	}
	randomDirection() {
		this.dirY = (Math.random() > .5) ? 5 : -5;
		this.dirX = (this.topDir > 0) ? -5 : 5;
	}
	rewritePositions() {
		this.ball.style.top = '180px';
		this.ball.style.left = '380px';
		this.rightRacket.style.top = '150px';
		this.rightRacket.style.right = '5px';
		this.leftRacket.style.top = '150px';
		this.leftRacket.style.left = '5px';
	}
	ballMove() {
		this.rewritePositions();
		let alertText = document.querySelector('.press-key');
		alertText.classList.remove('press-key_hidden');
		let rightScore = 0;
		let leftScore = 0;
		this.randomDirection();
		document.addEventListener('keydown', e => {
			if (e.code === 'Space') {
				alertText.classList.add('press-key_hidden');
				this.rightRacketMove();
				this.leftRacketMove();
				let setInt = setInterval(() => {
					let tableRect = this.table.getBoundingClientRect();
					let ballRect = this.ball.getBoundingClientRect();
					let rightRectR = this.rightRacket.getBoundingClientRect();
					let leftRectR = this.leftRacket.getBoundingClientRect();
					if (2 + tableRect.top >= ballRect.top) {
						this.dirY = 5;
					}
					else if (tableRect.right - rightRectR.width - 5 <= ballRect.right) {
						if (rightRectR.top - 25 < ballRect.top && rightRectR.bottom + 25 > ballRect.bottom) {
							this.dirX = -5;
						}
						else if (tableRect.right - rightRectR.width + 5 <= ballRect.right) {
							this.rightPlayerScore.textContent = ++rightScore;
							clearInterval(setInt);
							window.location.reload();
						}
					}
					else if (tableRect.left + leftRectR.width + 5 >= ballRect.left) {
						if (leftRectR.top - 25 < ballRect.top && leftRectR.bottom + 25 > ballRect.bottom) {
							this.dirX = 5;
						}
						else if (tableRect.left - rightRectR.width + 5 <= ballRect.left) {
							this.leftPlayerScore.textContent = ++leftScore;
							clearInterval(setInt);
							window.location.reload();
						}
					}
					else if (tableRect.bottom <= ballRect.bottom) {
						this.dirY = -5;
					}
					this.ball.style.top = `${this.ball.offsetTop + this.dirY}px`;
					this.ball.style.left = `${this.ball.offsetLeft + this.dirX}px`;
				},35);
			}
		});
	}
}

export default Ball;