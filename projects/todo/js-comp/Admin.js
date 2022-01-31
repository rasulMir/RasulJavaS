class Admin {
	constructor(data) {
		this.adminCard = document.querySelector(data);
		this.usersList = document.querySelector('.admin__users-list');
		this.userInfo = JSON.parse(localStorage.getItem('user-info')) || [];
		this.init();
	}

	showPass(curr, id) {

		if (curr.closest(id)) {
			this.inpPass.type = (curr.closest(id).checked) ? 'text' : 'password';
		}
		return;
	}

	

	delUser(curr) {
		if (curr.closest('.admin__users-btns_del')) {
			let parentInd = curr.closest('.admin__users-item').dataset.index;
			this.userInfo.splice((parentInd - 1), 1);
		} 
		localStorage.setItem('user-info', JSON.stringify(this.userInfo));
		this.displayUsersItem(this.userInfo);
	}

	chbxLblEvent() {
		this.lbls = document.querySelectorAll('label');
		this.lbls.forEach(lbl => {
			lbl.addEventListener('click', event => {
				let currLbl = event.target;
				this.showPass(currLbl, '#showPass');
			});
		});
	}

	dispalyCurrentAdmin({ login, pass }, check) {

		if (!check){
			this.inpLogin = document.querySelector('#adminLogin');
			this.inpPass = document.querySelector('#adminPass');
			this.inpLogin.value = login;
			this.inpPass.value = pass;
			check = true;
		}
		else return;
	}

	createUsersItem(parent, tasks) {
		parent.innerHTML =  tasks.map((e, i) => {
			if (e.isAdmin) return;
			else {
				return `
					<li class="admin__users-item" data-index="${i}">
						<div class="admin__user-login">${e.login}</div>
						<div class="admin__users-btns">
							<button class="admin__users-btns_del admin__users-btn" type="button">delete</button>
							<button class="admin__users-btns_change admin__users-btn" type="button">change</button>
						</div>
					</li>
				`;
			}
		}).join('');
	}

	displayUsersItem (storage) {
		let check;
		storage.forEach( user => {
			if (user.isAdmin) {
				this.dispalyCurrentAdmin(user, check);
			}
		});
		this.createUsersItem(this.usersList, storage);
	}
	init() {
		if (location.pathname.endsWith('admin.html')) {
			this.displayUsersItem(this.userInfo);
			this.chbxLblEvent();
			this.usersList.addEventListener('click', event => {
				let currBtn = event.target;
				this.delUser(currBtn);
			});
		}
	}
}

new Admin('.admin');

export default Admin;