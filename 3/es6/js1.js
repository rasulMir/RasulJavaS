const imgUrls = [
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
	'https://picsum.photos/',
];

const pagination = document.querySelector('.main-body__pagination');
const content = document.querySelector('.main-body__content');
let cardsOfContent = 5;
let btnOfPagination = Math.round(imgUrls.length / cardsOfContent);


function createBtns(end) {
	for (let i = 0; i < end; i++) {
		let btn = document.createElement('button');
		btn.innerText = i + 1;
		btn.type = 'button';
		btn.classList.add('main-body__items');
		pagination.appendChild(btn);
	}
	return document.querySelectorAll('.main-body__items');
}

function r() {
	return Math.round(Math.random() * imgUrls.length);
}

function createCards(arr, curr) {
	curr.classList.add('main-body__items_active');



	let start = (curr.innerText - 1) * cardsOfContent;
	let end = start + cardsOfContent;

	content.innerHTML = '';
	let cards = arr.slice(start, end);
	for (let card of cards) {
		let cardTemple = `
			<div class="main-body__card">
				<img src="${card}/id/${r()}/200" alt="card photos">
			</div>
		`;
		content.insertAdjacentHTML('beforeend', cardTemple);
	}
}

let btns = createBtns(btnOfPagination);
createCards(imgUrls, btns[0]);
let active = document.querySelector('.main-body__items_active');
for (let btn of btns) {
	btn.addEventListener('click', function (event) {
		let curr = event.target;

		createCards(imgUrls, curr);
	});
	
};
