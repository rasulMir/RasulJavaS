class GameLogic {

	constructor() {
		this.cells = document.querySelectorAll('.cells');
		this.cardFront = document.querySelectorAll('.card__front');
		this.cardBack = document.querySelectorAll('.card__back');
	}

	frontCardHide(front) {
		front.classList.add('card__front_hidden');
	}

	getNumbers(curr) {
		return curr.previousElementSibling.innerText;
	}

	gaming() {
		for (let frontCards of this.cardFront) {
			frontCards.addEventListener('click' , (e) => {
				let temp , temp2, currCard, firstNum, secondNum;
				currCard = e.target;
				this.frontCardHide(currCard);
				firstNum = this.getNumbers(currCard);

				if (secondNum === firstNum) {
					firstNum.previousElementSibling.classList.remove('card__front_hidden');
					firstNum.previousElementSibling.style.background = 'white';
					secondNum.previousElementSibling.classList.remove('card__front_hidden');
					second.previousElementSibling.style.background = 'white';
				}
				else if (secondNum) {
					firstNum.previousElementSibling.classList.remove('card__front_hidden');
					secondNum.previousElementSibling.classList.remove('card__front_hidden');
				}
				temp = currCard;
				currCard = null;
				temp2 = temp;
				secondNum = this.getNumbers(temp2);
			});
		}
	}

}
export default GameLogic;