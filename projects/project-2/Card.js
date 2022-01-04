import CountryCards from "./CountryCards.js";

class Card extends CountryCards {
	constructor() {
		super();
		this.cardsWrap = document.querySelector('.cards-wrap');
	}

	cardBody({name, media, capital, population}) {
		return `
			<div class="card">
				<div class="card__top">
					<div class="card__img">
						<img id="card__img_flag" src="${media.flag}" alt="country flag">
					</div>
					<div class="card__img card__img_emblem">
						<img id="card__img_emblem" src="${media.emblem}" alt="country emblem">
					</div>
				</div>
				<h2 class="card__name">${name.toLowerCase()}</h2>
				<ul class="card__info">
					<li class="card__info-item">
						Capital
						<span>${capital}</span>
					</li>
					<li class="card__info-item">
						Population
						<span>${population}</span>
					</li>
				</ul>
			</div>
		`
	}

	async response(url) {
		try {
			let response = await fetch(url);
			let data = await response.json();
			return data;
		}

		catch (rej) {
			console.log(rej);
		}
		
	}

	async createCards(url) {
		let data = await this.response(url);
		let arr = await data.map(elem => this.cardBody({...elem})).join('');
		this.cardsWrap.insertAdjacentHTML('beforeend', arr);
		return data;
	}
}
let c = new Card();

c.createCards('https://api.sampleapis.com/countries/countries');

export default Card;