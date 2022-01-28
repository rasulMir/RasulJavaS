class Password {
	constructor(data) {
		this.changePass = document.querySelector(data);
		this.initDOM();
		this.init();
	}

	initDOM() {
		this.oldPass = document.querySelector('#oldPass');
		this.newPassFirst = document.querySelector('#newPassFirst');
		this.newPassSecond = document.querySelector('#newPassSecond');
		this.chbx = document.querySelector('#showPass');
		this.changeBtn = document.querySelector('.change-pass__btns_change');
	}

	init() {
		
	}

}
new Password('.change-pass');
export default Password;