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

	onInputFn() {
		let country = document.querySelectorAll('.card');
		
		country.forEach(elem => {
			elem.hidden = true;
			if (elem.children[1].innerHTML.startsWith(this.value)) elem.hidden = false;
		});
	}

	InputSearch(){
		let search = this.createInputSearch();

		search.oninput = this.onInputFn;
	}
}

let b = new Search();

b.InputSearch();

export default Search;