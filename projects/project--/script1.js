
function create(n) {
	function randEnglishLetter() {
		
		const min = 'a'.codePointAt();
		const max = 'z'.codePointAt();
		let num = Math.round(Math.random() * (max - min) + min);// 97min, 122max

		return String.fromCodePoint(num);
	}

	let arr = Array(n).fill(null), i = 0;

	return arr.map(e => {
		i++;
		e = {
			letter : randEnglishLetter(),
			number : i,
		}
		return e;
	});;
}

let arr = create(150);

const mainTop = document.querySelector('.main-top');
let cardsOnPage = 8;
function createCard(arr, curr) {

	curr.classList.add('main-btns__item_active');

	let start = (curr.innerText - 1) * cardsOnPage;
	let end = start + cardsOnPage;

	mainTop.innerHTML = '';
	let cards = arr.slice(start, end);

	for (let card of cards) {
		let cardTemplate = `
			<div class="card">
				<h2 class="card__letter">
					${card.letter}
				</h2>
				<p class="card__num">
					${card.number}
				</p>
			</div>
		`;
		mainTop.insertAdjacentHTML('beforeend', cardTemplate);
	};
	showBtns(curr);
}

function createBtns(arr, cardsOnPage) {
	let mainBtns = document.querySelector('.main-btns');
	let sumOfBtns = Math.ceil(arr.length / cardsOnPage);
	
	for (let i = 1; i <= sumOfBtns; i++) {
		let btn = document.createElement('li');
		btn.classList.add('main-btns__item');
		btn.innerText = i;
		mainBtns.insertAdjacentElement('beforeend', btn);
	}

	let btns = document.querySelectorAll('.main-btns__item');
	return btns;
} 
