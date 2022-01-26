import data from "./data.js";

class Authorization {
	constructor(data) {
		this.authorization = document.querySelector(data);
		this.initDOM();
		this.initAuth();
	}

	checkLoginData(login) {
		if (!JSON.parse(localStorage.getItem('user-info'))) {
			localStorage.setItem('user-info', JSON.stringify(data));
		}
		let data = JSON.parse(localStorage.getItem('user-info'));
		return data.some(data => data.login === login);
	}

	checkPassData(pass) {
		if (!JSON.parse(localStorage.getItem('user-info'))) {
			localStorage.setItem('user-info', JSON.stringify(data));
		}
		let data = JSON.parse(localStorage.getItem('user-info'));
		return data.some(data => data.pass === pass);
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
			let login = this.checkLoginData(this.login.value);
			let pass = this.checkPassData(this.pass.value);
			if (login && pass) {
				location.href = './todo.html';
			}
			else {
				this.showAlert(`Неправильный логин или пароль`);
			}
		}
		else return;
	}

	registrationEvent(e) {
		if (e.closest('.registration-btn')) {
			location.href = './registr.html';
		}
		else return;
	}

	showPass() {
		let chbx = this.chbx.checked;
		if (chbx) {
			this.pass.type = 'text';
		}
		else this.pass.type = 'password';
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
				this.showPass();
				this.authorizationEvent(curr);
				this.registrationEvent(curr);
			}
			else return;
		});
	}
}

new Authorization('.authorization');

export default Authorization;