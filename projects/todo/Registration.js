import data from "./data.js";
class Registration {
	constructor (data) {
		this.nameInput = document.querySelector(data.nameInp);
		this.passInput = document.querySelector(data.passInp);
		this.chbx = document.querySelector(data.chbx);
		this.btn = document.querySelector(data.btn);
		this.lbl = document.querySelector(data.lbl);
		this.init();
	}

	init() {
		this.btn.addEventListener('click', (e) => {
			let user = this.checkData();
			this.checkUser(user);
		});

		this.lbl.addEventListener('click', this.showPassword);
	}

	checkData() {
		let name = this.nameInput.value.trim();
		let pass = this.passInput.value.trim();

		let userBool = data.some((user,i)=>(user.name === name && data[i].password === pass));

		return userBool;
	}

	checkUser(bool) {
		if (!bool) {
			let txt = document.querySelector('.text');
			this.clearInputs();
			txt.innerHTML = `Имя или пароль неправильные.<br/>Введите еще раз.`;
			txt.style.color = 'red';
		}
		else {
			localStorage.setItem('user-info', JSON.stringify({userName : this.nameInput.value, userPass : this.passInput.value}));
			location.assign('./index2.html');
		}
	}

	clearInputs() {
		this.nameInput.value = '';
		this.passInput.value = '';
		this.chbx.checked = false;
	}

	showPassword = () => {
		if (this.chbx.checked) this.passInput.type = "text";
		else if (!this.chbx.checked) this.passInput.type = "password";

		else return;
	}
}

new Registration({
	nameInp : '.name-input',
	passInp : '.password-input',
	chbx : '.chbx',
	btn : '.btn',
	lbl : '.chbx-label'
});

export default Registration;