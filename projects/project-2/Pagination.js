import Search from "./Search.js";

class Pagination extends Search {
	constructor() {
		super();
		this.pagination = 'country-cards-bttm';
		this.cardsOnPage = 5;
	}

	createBttmWrap() {
		let wrap = document.createElement('div');
		wrap.classList.add(`${this.pagination}`);
		this.addChild(this.countryCards, wrap);
		return wrap;
	}

	foLoopBtns(value, parent) {
		let btn = document.createElement('button');
		btn.classList.add('country-cards-bttm__btn');
		btn.innerText = value;
		this.addChild(parent, btn);
	}

}

let u = new Pagination();

export default Pagination;