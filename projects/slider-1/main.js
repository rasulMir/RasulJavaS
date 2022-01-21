class Slider {
	constructor() {
		this.sliderWrap = document.querySelector('.slider-wrap');
		this.items = document.querySelectorAll('.slider__item');
		this.dotsWrap = document.querySelector('.slider-dots');
		this.itemsOnPerDot = 3;
	}

	createDots(){

		let end = Math.ceil(this.items.length / this.itemsOnPerDot);
		for(let i = 1; i <= end; i++) {
			let dotsHTML = `
				<li class="slider-dots__item" data-active="false">${i}</li>
			`;
			this.dotsWrap.insertAdjacentHTML('beforeend', dotsHTML);
		}

	}

	dotsClick = (current) => {
		current.dataset.active = true;
		let itemsWidth = this.items[0].offsetWidth + parseInt(getComputedStyle(this.items[0], null).marginRight, 10);
		let left = (itemsWidth * this.itemsOnPerDot) * (current.textContent - 1);
		this.sliderWrap.style.left = `-${left}px`;
	}

	init() {
		this.createDots();
		let dots = Array.from(document.querySelectorAll('.slider-dots__item'));
		dots[0].dataset.active = true;
		dots.forEach(dot => {
			dot.addEventListener('click', e => {
				let current = e.target;
				dots.forEach(e => e.dataset.active = false);
				this.dotsClick(current);
			});
		});
	}

}
let a = new Slider;
a.init();