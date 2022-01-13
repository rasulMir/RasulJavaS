class Cards {

	constructor() {
		this.userWindow = document.querySelector('.user-window');
		this.levelBtns = document.querySelectorAll('.alert-card__btn_levels');
		this.currentCards = document.querySelector('.game-info__current-cards');
		this.time = document.querySelector('.game-info__time');
	}

	randomNumbers(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	numbersArr(n) {
		let arr = [], set;
		set = new Set;
		for (let i = 0; i < 2; i++) {
			set.clear();

			for (let k = 0; true; k++) {
				let rand = this.randomNumbers(1, n);
				set.add(rand);
				if (set.size === n) break;
			}

			arr.splice(0,0, ...set);
		}
		return arr;
	}

	createCards(n) {
		let maxNumber = n / 2;
		let numbers = this.numbersArr(maxNumber);
		for ( let num of numbers) {
			let cardTemplate = `
				<div class="cells">
					<div class="card card__back">${num}</div>
					<div class="card card__front"></div>
				</div>
			`;
			this.userWindow.insertAdjacentHTML('beforeend', cardTemplate);
		}
		this.currentCards.textContent = numbers.length;
	}

	addZero(n) {
		if (n < 10) return '0' + n;
		return n;
	}

	gameTime() {
		let m = 0, s = 0;
		this.time.textContent = `${this.addZero(m)}:${this.addZero(s)}`;
		setInterval(
			() => {
				++s;
				if (s > 59) {
					++m;
					s = 0;
				}
				this.time.textContent = `${this.addZero(m)}:${this.addZero(s)}`;
			}
		, 1000);
	}

	getLevel() {
		this.levelBtns.forEach(e => e.addEventListener('click', (event) => {
			let currBtn = event.target;
			let lvl = +currBtn.getAttribute('data-level') * 10;
			currBtn.closest('.check-user').classList.add('hidden');
			this.createCards(lvl);
			this.gameTime();
		}));
	}

}

export default Cards;