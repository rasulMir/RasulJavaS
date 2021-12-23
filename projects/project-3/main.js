class Card {
	constructor (cardWrap, container) {
		this.cardWrap = document.querySelector('.main-body');
		this.container = document.querySelector('.container');
	}

	createWrapper() {
		const wrapDiv = document.createElement('div');
		wrapDiv.className = this.cardWrap;
		const cont = document.querySelector(this.container);
		wrapDiv.insertAdjacentElement('beforebegin', wrapDiv);
	}

	async getData(url) {
		try {
			const data = await fetch(url);
			
			const arr = await data.json();
			return arr;
		}
		catch(rej) {
			return console.log('Пожулуйста перезагрузите страницу');
		}
	}

	createCard () {
		return `
			<div class="meal-card">
					<h2 class="meal-card__title">

					</h2>
					<div class="meal-card__img">
						<img src="" alt="">
					</div>
					<p class="meal-card__ingredients">

					</p>
			</div>
		`
	}

}

let a = new Card('.cards-wrap', '.container');

const objData = a.getData('https://api.sampleapis.com/recipes/recipes');
console.log(objData);



