class Slider {
	constructor () {
		this.sliderItems = document.querySelectorAll('.slider__item');
		this.sliderWrap = document.querySelector('.slider-wrap');
		this.sliderDots = document.querySelector('.slider__dots');
		this.prevBtn = document.querySelector('.btns__prev');
		this.nextBtn = document.querySelector('.btns__next');
	}

	init() {
		this.current = 0;
		this.createDots();
		this.slidesActive();

		const dotsItems = Array.from(this.sliderDots.children);
		dotsItems.forEach(dot => {
			dot.addEventListener('click', this.sliderDotsEvent);
		});

		this.nextBtn.addEventListener('click', e => {
			if(this.current === this.sliderItems.length -1) { this.current = 0; }
			else { this.current++; }
			this.slidesActive();
			this.slidesAnimation();
		});

		this.prevBtn.addEventListener('click', e => {
			if(this.current <= 0) { this.current = this.sliderItems.length - 1; }
			else { this.current--; }
			this.slidesActive();
			this.slidesAnimation();
		});
	}

	slidesAnimation() {
		let activeSlide = Array.from(this.sliderItems)[this.current];
		Array.from(this.sliderItems).forEach(item => {
			item.classList.remove('slider__item_next');
			item.classList.remove('slider__item_prev');
		});
		if (!activeSlide.previousElementSibling) { 
			activeSlide.nextElementSibling.classList.add('slider__item_next');
		}
		if (!activeSlide.nextElementSibling) { 
			activeSlide.previousElementSibling.classList.add('slider__item_prev');
		}
		if (this.current !== 0 && this.current !== 5) {
			activeSlide.previousElementSibling.classList.add('slider__item_prev');
			activeSlide.nextElementSibling.classList.add('slider__item_next');
		}

	}

	slidesActive() {
		let sliderItems = this.sliderItems;
		let sliderDotsItems = Array.from(this.sliderDots.children)
		sliderItems.forEach((item, index) => {
			item.classList.add('slider__item_hidden');
			sliderDotsItems[index].classList.remove('slider__items_active');
		});
		sliderItems[this.current].classList.remove('slider__item_hidden');
		sliderDotsItems[this.current].classList.add('slider__items_active');
		this.prevBtn.style.display = (this.current == 0) ? 'none' : '';
		this.nextBtn.style.display = (this.current == 5) ? 'none' : '';
	}

	createDots() {
		for (let i = 0; i < this.sliderItems.length; i++) {
			let dotsTemplate = `
				<li class="slider__items" data-number="${i}"></li>
			`;
			this.sliderDots.insertAdjacentHTML('beforeend', dotsTemplate);
		}
	}

	sliderDotsEvent = (e) => {
		this.current = e.target.dataset.number;
		this.slidesActive();
		this.slidesAnimation();
	}
}

let a = new Slider;
a.init();
a.slidesAnimation();