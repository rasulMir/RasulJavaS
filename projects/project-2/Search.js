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

	async InputSearch(url){
		let search = await this.createInputSearch();

		search.oninput = function (arr) {
			let country = document.querySelectorAll('.card');
			
			country.forEach(elem => {
				elem.hidden = true;
				if (elem.children[1].innerHTML.startsWith(search.value)) elem.hidden = false;
			});
		}
	}
}

let b = new Search();

b.InputSearch();

export default Search;