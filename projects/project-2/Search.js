import Card from "./Card.js";

class Search extends Card {
	constructor () {
		super();
		this.countryCardsTop = document.querySelector('.country-cards-top')
	}

	createInputSearch() {
		let inp = this.createElem('input');
		inp.classList.add('country-cards-top__search');
		this.addChild(this.countryCardsTop, inp);
		return inp;
	}

	async onInputFn() {
		let cards = document.querySelectorAll('.card');
		
		cards.forEach(elem => {
			elem.hidden = true;
			let bool = elem.children[1].innerHTML.startsWith(this.value);
			if (bool) elem.hidden = false;
		});
	}

	async InputSearch(){
		let search = await this.createInputSearch();

		search.oninput = this.onInputFn;
	}
}

let b = new Search();

b.InputSearch();

export default Search;