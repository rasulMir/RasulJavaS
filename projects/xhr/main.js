class Comments {
	constructor(data) {
		this.wrap = document.querySelector(data);
		this._url = 'https://jsonplaceholder.typicode.com/comments';
		this.commentsOnDisplay = 8;
		this.loadCount = 0;
	}

	get url() {
		return this._url;
	}

	set url(value) {
		if (!value.endsWith('comments')) {
			console.log('uncorrect url');
		}
		else {
			this._url = value;
		}
	}

	data = (cb) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', this.url);
		xhr.responseType = 'json';
		xhr.addEventListener('load', () => {
			let response = xhr.response;
			cb(response);
		});
		xhr.send();
	}

	commentCardTemple({email, body}) {
		return `
			<div class="comment-card">
				<div class="comment-card__icon">
					<span class="far fa-user"></span>
					<span class="comment-card__email">
						${email}
					</span>
				</div>
				<p class="comment-card__text">
					${body}
				</p>
			</div>
		`;
	}

	fragmentComment = (data) => {
		let start = this.commentsOnDisplay * this.loadCount;
		let end = start + this.commentsOnDisplay;
		const dataArr = data.slice(start, end);
		dataArr.forEach(elem => {
			let card = this.commentCardTemple(elem);
			this.wrap.insertAdjacentHTML('beforeend', card);
		});
		this.loadCount++;
	}

	init() {
		this.data(this.fragmentComment);
		document.addEventListener('scroll', () => {
			let bttm = window.innerHeight + window.pageYOffset;
			if (this.wrap.scrollHeight === bttm) {
				this.data(this.fragmentComment);
			}
			else return;
		});
	}

}

const comments = new Comments('.wrapper');

comments.init();