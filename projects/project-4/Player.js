class Player {
	
	constructor () {
		this._userName;
		this.playerNameInput = document.querySelector('.alert-card__player-name');
		this.startGameBtn = document.querySelector('.alert-card__btn_start-game');
	}

	get nickName() {
		return this._userName;
	}

	set nickName(value) {
		this._userName = value;
	}

	hideCheckUser(event) {
		let currBtn = event.target;
		let checkUser = currBtn.closest('.check-user');
		checkUser.classList.add('hidden');
	}

	registrationPlayer (event) {
		let curr = event.target;
		this.nickName = curr.value;
	}

	startGame() {
		this.playerNameInput.onchange = this.registrationPlayer;
		this.startGameBtn.addEventListener('click', this.hideCheckUser);
	}

}

export default Player;