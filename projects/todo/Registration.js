import data from "./data.js";
import Authorization from "./Authorization.js";
class Registration extends Authorization {
	constructor(data) {
		super();
		this.registration = document.querySelector(data);
		this.initRegistrDOM();
		this.initRegistr();
	}

	initRegistrDOM() {
		this.registrLogin = document.querySelector('#registrLogin');
		this.registrChbx = document.querySelector('#registrChbx');
		this.registrPass = document.querySelector('#registrPass');
		this.registrPassSecond = document.querySelector('#registrPassSecond');
	}

	getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	getPass(){
		let arr = [];
		let passLength = this.getRandom(4, 8);
		for (let i = 0; i < passLength / 2; i++) 	{
			let n = String.fromCodePoint(this.getRandom(48,57));
			let l = String.fromCodePoint(this.getRandom(65,90));
			arr.push([l],[n]);
		}

		return arr.join('');
	}

	passShow(bool) {
		if (bool) {
			this.registrPass.type = 'text';
			this.registrPassSecond.type = 'text';
		}
		else {
			this.registrPass.type = 'password';
			this.registrPassSecond.type = 'password';
		}
	}
	generatePass(pass, bool) {
		this.registrPass.value = pass;
		this.registrPassSecond.value = pass;
		this.passShow(bool);
	}

	passShowEvent() {
		let bool = document.querySelector('#registrChbxShow').checked;
		this.passShow(bool);
	}

	checkChbx(curr) {
		if (curr.closest('.reg-lbl__chbx')) {
			if (this.registrChbx.checked) {
				let pass = this.getPass();
				this.generatePass(pass, true);
				this.showAlert('Пароль сгенерирован');
			}
			else {
				this.generatePass('', false);
			}
		}
		else return;
	}

	checkNewlog = (e) => {
		let lowerCase = e.target.value.toLowerCase();
		let login = this.checkLoginData(lowerCase);
		if (login) {
			this.showAlert('Такои логин существует');
		}
		else return;
	}

	registrBtn(curr) {
		if (curr.closest('.registrated')) {
			if (this.registrLogin.value && this.registrPass.value && this.registrPassSecond.value) {
				let userInfo  = {
					login : this.registrLogin.value.toLowerCase(),
					pass : this.registrPass.value
				}
				data.push(userInfo);
				localStorage.setItem('user-info', JSON.stringify(data));
				location.href = "./index.html";
			}
			else {
				this.showAlert('Заполните все поля');
			}
		}
		else return;
	}

	initRegistr() {
		if(location.pathname.endsWith("registr.html")) {
			this.registrLogin.addEventListener('change', this.checkNewlog);
			document.addEventListener('click', event => {
				let curr = event.target;
				this.passShowEvent()
				this.checkChbx(curr);
				this.registrBtn(curr);
			});
		}
	}
}

new Registration('.registration');

export default Registration;