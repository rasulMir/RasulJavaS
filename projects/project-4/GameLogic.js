import Cards from "./Cards.js";
class GameLogic extends Cards{

	constructor() {
		super();
		this.cells = document.querySelectorAll('.cells');
		this.cardFront = document.querySelectorAll('.card__front');
		this.cardBack = document.querySelectorAll('.card__back');
		this.popUp = document.querySelector('.pop-up');
	}

	popUpAnimation(selector, n) {
		let textArr = ['Good Job!', 'OOPS!'];
		this.popUp.textContent = textArr[n];
		this.popUp.classList.add(selector);
		setTimeout(() => this.popUp.classList.remove(selector), 1000);
	}

	checkCardBack() {
		let opened = this.userWindow.querySelectorAll('.card__front_hidden');
		if (opened.length === 2) {
			let first = opened[0].previousElementSibling.innerHTML;
			let second = opened[1].previousElementSibling.innerHTML;
			if (first === second) {
				let settime = setTimeout(() => opened.forEach( e => e.closest('.cells').remove()), 1000);
				this.popUpAnimation('pop-up_animation', 0);
				this.currentCards.textContent -= 2;
				console.log(this.currentCards.textContent === 0);
			}
			else {
				this.popUpAnimation('pop-up_animation', 1);
				let settime = setTimeout(() => opened.forEach( e => e.classList.remove('card__front_hidden')), 1000);
			}
		}
	} 

	gaming() {
		this.userWindow.addEventListener('click', (e) => {
			let curr = e.target, back;

			if(curr.classList.contains('card__front')) {
				back = curr.previousElementSibling;
				curr.classList.add('card__front_hidden');
			}
			else return;
			this.checkCardBack();
		});
		// if (this.currentCards.textContent === 0) {
		// 	this.getLevel();
		// }
	}

}
export default GameLogic;