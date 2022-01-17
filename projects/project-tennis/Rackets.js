import Table from "./Table.js";
class Rackets extends Table {
	constructor() {
		super();
		this.rightRacket = document.querySelector('.racket__right');
		this.leftRacket = document.querySelector('.racket__left');
		this.racketsSpeed = 5;
	}

	leftRacketMove() {
		document.addEventListener('keydown', e => {
			let leftRectR = this.leftRacket.getBoundingClientRect();
			let tableRect = this.table.getBoundingClientRect();
			if (e.code === 'KeyW') {
				this.leftRacket.classList.add('racket__left_animate-top');
				if (tableRect.top + 1 >= leftRectR.top) return;
				this.leftRacket.style.top = `${this.leftRacket.offsetTop - this.racketsSpeed}px`
			}
			if (e.code === 'KeyS') {
				this.leftRacket.classList.add('racket__left_animate-bttm');
				if (tableRect.bottom <= leftRectR.bottom) return;
				this.leftRacket.style.top = `${this.leftRacket.offsetTop + this.racketsSpeed}px`
			}
		});
		document.addEventListener('keyup', e => {
			if (e.code === 'KeyW') {
				this.leftRacket.classList.remove('racket__left_animate-top');
			}
			if (e.code === 'KeyS') {
				this.leftRacket.classList.remove('racket__left_animate-bttm');
			}
		});
	}

	rightRacketMove() {
		document.addEventListener('keydown', e => {
			let rightRectR = this.rightRacket.getBoundingClientRect();
			let tableRect = this.table.getBoundingClientRect();
			if (e.code === 'ArrowUp') {
				this.rightRacket.classList.add('racket__right_animate-top');
				if (tableRect.top + 1 >= rightRectR.top) return;
				this.rightRacket.style.top = `${this.rightRacket.offsetTop - this.racketsSpeed}px`
			}
			if (e.code === 'ArrowDown') {
				this.rightRacket.classList.add('racket__right_animate-bttm');
				if (tableRect.bottom <= rightRectR.bottom) return;
				this.rightRacket.style.top = `${this.rightRacket.offsetTop + this.racketsSpeed}px`
			}
		});
		document.addEventListener('keyup', e => {
			if (e.code === 'ArrowUp') {
				this.rightRacket.classList.remove('racket__right_animate-top');
			}
			if (e.code === 'ArrowDown') {
				this.rightRacket.classList.remove('racket__right_animate-bttm');
			}
		});
	}
}
export default Rackets;