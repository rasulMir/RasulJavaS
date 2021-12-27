class CountryCards {
	constructor () {
		this.countryCards = document.querySelector('.country-cards');
	}

	addChild(parent, elem) {
		return parent.append(elem);
	}

	createElem(tag) {
		return document.createElement(tag);
	}

	createCardsWrapper() {
		let wrapper = this.createElem('div');
		wrapper.classList.add('cards-wrap');
		this.addChild(this.countryCards, wrapper);
	}

}

const wrapper = new CountryCards();
wrapper.createCardsWrapper();

export default CountryCards;