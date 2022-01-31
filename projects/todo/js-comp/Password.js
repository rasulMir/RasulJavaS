import Authorization from "./Authorization.js";
class Password extends Authorization {
	constructor() {
		super();
		this.initDOMElem();
		this.init();
	}

	checkPass(pass, check) {
		let storage = JSON.parse(localStorage.getItem('user-info'));
		let bool = null;
		storage.forEach(element => {
			if (element.current) {
				bool = (pass === element.pass) ? true : false;

				if (check) {
					element.pass = pass;
				}
			}
		});
		localStorage.setItem('user-info', JSON.stringify(storage));
		return bool;
	}


	clearInputs() {
		this.newPassFirst.value = '';
		this.newPassSecond.value = '';
	}

	changePass = () => {
		this.checkPass(this.newPassFirst.value, true);
		let bool = this.checkPass(this.newPassSecond.value, false);
		if (bool) {
			this.showAlert('Пароль изменен');
			this.redirect('./todo.html');
		}
		else {
			this.showAlert('Повторный пароль неправильный');
			this.clearInputs();
		}
	}

	initDOMElem() {
		this.newPassFirst = document.querySelector('#newPassFirst');
		this.newPassSecond = document.querySelector('#newPassSecond');
		this.changeChbx = document.querySelector('#showPass');
		this.changeBtn = document.querySelector('.change-pass__btns_change');
		this.changeLblChbx = document.querySelector('.change-pass__lbl_chbx');
	}

	init() {
		if (location.pathname.endsWith('pass.html')) {
			this.changeBtn.addEventListener('click', this.changePass);
			this.changeLblChbx.addEventListener('click', () => {
				this.showPass(this.changeChbx, this.newPassFirst);
				this.showPass(this.changeChbx, this.newPassSecond);
			});
		}
	}

}
new Password;
export default Password;