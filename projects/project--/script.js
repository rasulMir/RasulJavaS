let btns = createBtns(arr, cardsOnPage);
createCard(arr, btns[0]);

function showBtns(curr) {

	function dots () {
		let dots = document.createElement('li');
		dots.className = 'main-btns__item main-btns__item_dots';
		dots.innerText = '...';
		return dots;
	}

	let first = btns[0];
	let last = btns[btns.length - 1];
	let before, after;
	let removeDots = document.querySelectorAll('.main-btns__item_dots');

	if (removeDots.length) for (let dots of removeDots) dots.remove();

	for (let btn of btns) {
		btn.hidden = true;
		if (btn === first) btn.hidden = false;
		if (btn === last) btn.hidden = false;
	}

	if (first === curr) {
		before = curr.nextElementSibling;
		before.hidden = false;
		after = before.nextElementSibling;
		after.hidden = false;
		after.insertAdjacentElement('afterend', dots());
	}

	else if (last === curr) {
		before = curr.previousElementSibling;
		before.hidden = false;
		after = before.previousElementSibling;
		after.hidden = false;
		after.insertAdjacentElement('beforebegin', dots());
	}	

	else {
		curr.hidden = false;
		before = curr.previousElementSibling;
		before.hidden = false;
		before.insertAdjacentElement('beforebegin', dots());
		after = curr.nextElementSibling;
		after.hidden = false;
		after.insertAdjacentElement('afterend', dots());
		if (first === before) {
			first.previousElementSibling.remove();
		}
		if (last === after) {
			after.nextElementSibling.remove();
		}
	}
	
}

function pagination(arr) {
	btns.forEach( e => {
		e.addEventListener('click' , function(event) {
			let curr = event.target;
			let active = document.querySelector('.main-btns__item_active');
			if (active) active.classList.remove('main-btns__item_active');
			
			createCard(arr, curr);
		});
		
	});
}

pagination(arr);