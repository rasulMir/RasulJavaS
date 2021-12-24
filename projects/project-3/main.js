let baseurl = 'https://api.sampleapis.com/recipes/recipes';
async function response(url) {
	try {
		const response = await fetch(url);
		const arr = await response.json();
		return arr;
	}

	catch(rej) {
		return console.log(rej);
	}
}
let c = async () => {
	try {
		let c = await response(baseurl);
		return await c.map(e => createCard({...e})).join();
	}
	catch(rej) {
		return console.log(rej);
	}
}
let d = c();

function createCard({title, photoUrl, ingredients}) {
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

function createCardWrap(n) {
	const container = document.querySelectorAll('.container');
	const wrapper = document.createElement('div');
	wrapper.classList.add('cards-wrapper');
	container[n].append(wrapper);
	return document.querySelector('.cards-wrapper');
}

let b = createCardWrap(1);
b.append(d);