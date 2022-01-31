import data from "../data.js";

class Authorization {
	constructor(data) {
		this.authorization = document.querySelector(data);
		this.initDOM();
		this.initAuth();
	}

	checkData(prop, check, bool) {
		if (!JSON.parse(localStorage.getItem('user-info'))) {
			localStorage.setItem('user-info', JSON.stringify(data));
		}
		let storage = JSON.parse(localStorage.getItem('user-info'));
		let filtered = storage.filter(data => {
			data.current = false;
			if (data[prop] === check) {
				if (bool) data.current = true;
				return data[prop] === check;
			}
			return;
		})[0];
		if (bool) {
			localStorage.setItem('user-info', JSON.stringify(storage));
		}
		return filtered;
	}

	redirect(url) {
		setTimeout(() => {
			location.href = url;
		}, 0);
	}

	showAlert(txt, time = 2) {
		this.alert.textContent = txt;
		this.alert.dataset.top = true;
		setTimeout(() => {
			this.alert.textContent = ``;
			this.alert.dataset.top = false;
		} ,time * 1000);
	}

	authorizationEvent(e) {
		if (e.closest('.authorization__btn')) {
			let user = this.checkData('login', this.login.value, true);
			if (user.login && user.pass) {
				this.redirect('./html-pages/todo.html');
			}
			else {
				this.showAlert(`Неправильный логин или пароль`);
			}
		}
		else return;
	}

	registrationEvent(e) {
		if (e.closest('.registration-btn')) {
			this.redirect('./html-pages/registr.html');
		}
		else return;
	}

	showPass(chbx, input) {
		if (chbx.checked) {
			input.type = 'text';
		}
		else input.type = 'password';
	}

	initDOM() {
		this.chbx = document.querySelector('#authChbx');
		this.pass = document.querySelector('#authPass');
		this.login = document.querySelector('#authLogin');
		this.alert = document.querySelector('.alert');
	}

	initAuth() {
		document.addEventListener('click', event => {
			if (location.pathname.endsWith("index.html")) {
				let curr = event.target;
				this.showPass(this.chbx, this.pass);
				this.authorizationEvent(curr);
				this.registrationEvent(curr);
			}
			else return;
		});
	}
}

new Authorization('.authorization');

export default Authorization;