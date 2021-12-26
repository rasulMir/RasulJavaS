import WrapperCard from "./WrapperCard.js"; 

class Card extends WrapperCard {

	constructor () {
		super();
		this.card = document.querySelectorAll('.card');
		this.cardBtn = document.querySelectorAll('.card__btn');
	}

	createCardWrap() {
		const wrapper = document.createElement('div');
		wrapper.classList.add('cards-wrapper');
		this.recipeCardsWrapper.append(wrapper);
		return document.querySelector('.cards-wrapper');
	}

	async response(url) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		}
		catch(rej) {
			console.log(rej);
		}
	}

	createBtn() {
		return `
			<button class="card__btn" type="button">Delete card</button>
		`
	}

	getSelector(className) {
		return document.querySelectorAll(className);
	}

	addCard({ title, photoUrl, ingredients }) {
		return `
			<div class="card">
				<h2 class="card__title">${title}</h2>
				<div class="card__img">
					<img src="${photoUrl}" alt="food image">
				</div>
				<p class="card__ingredients">
					${ingredients}
				</p>
			</div>
		`;
	}

	async createCard(url) {
		const cardWrap = this.createCardWrap();
		const data = await this.response(url);
		const cards = await data.map(elem => this.addCard({...elem})).join('');
		cardWrap.insertAdjacentHTML('afterbegin', cards);
	}

	async createAll(url) {
		await this.createCard(url);
		const card = this.getSelector('.card');
		this.addBtn(card);
	}

	addBtn(arr) {
		const btn = this.createBtn();
		arr.forEach(elem => elem.insertAdjacentHTML('beforeend', btn));
	}

	btnClickEvent(btns){
		btns.forEach(btn => {
			btn.addEventListener('click', function (e) {
					const currentButton = e.currentTarget;
					if (btns.length === 1) getSelector('.card-wrapper').remove();
					currentButton.closest('.card').remove();					 
			 })
		});
	}

	async deleteCard(url) {
		await this.createAll(url);
		const btns = this.getSelector('.card__btn');
		this.btnClickEvent(btns);
	}
}

let a = new Card();
a.deleteCard('https://api.sampleapis.com/recipes/recipes');
