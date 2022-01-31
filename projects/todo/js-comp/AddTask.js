
class AddTask {
	constructor(data) {
		this.head = document.querySelector(data);
		this.initDOM();
		this.init();
	}

	displayLogin() {
		const headAdmItems = document.querySelector('.head__adm-items');
		let storage = JSON.parse(localStorage.getItem('user-info'));
		storage.forEach(e => {
			if (e.current) {
				headAdmItems.insertAdjacentText('afterbegin', e.login);
				if (e.isAdmin) {
					const headLinks = document.querySelector('.head__links');
					const adminPageLink = `<a href="../html-pages/admin.html" class="head__link">Админ панель</a>`;
					headLinks.insertAdjacentHTML('beforeend', adminPageLink);
				}
			}
		});
		localStorage.setItem('user-info', JSON.stringify(this.userInfo));
	}

	getDate() {
		function z(n) {
			if (n < 10) return '0' + n;
			return n;
		}

		let now = new Date;
		let y = now.getUTCFullYear();
		let m = now.getUTCMonth() + 1;
		let d = now.getDate();

		return (this.date.value) ? this.date.value : `${y}.${z(m)}.${z(d)}`;
	}

	appearTasks(parent, task = []) {
		parent.innerHTML = task.map((e, i) => {
			return `
				<li class="content__items" data-index ="${i}">
					<div class="content__circle-important" data-important="${e.chbx}"></div>
					<p class="content__txt" data-underline="${e.underline}">${e.text}</p>
					<div class="content__date" data-underline="${e.underline}">${e.date}</div>
					<div class="content__btns">
						<button class="content__btns_del" type="button">Delete</button>
						<button class="content__btns_edit" type="button">Edit</button>
					</div>
				</li>
			`;
		}).join('');
	}

	currentUser(task = null) {
		this.userInfo.forEach((user,index,arr) => {
			if (user.current) {
				if (task) {
					arr[index].tasks.push(task);
				}
				this.appearTasks(this.content, arr[index].tasks);
			}
		});
	}

	add = () => {
		let item = {
			date : this.getDate(),
			text : this.text.value,
			chbx : this.chbx.checked || '',
			underline : '',
		};

		this.currentUser(item);
		localStorage.setItem('user-info', JSON.stringify(this.userInfo));
	}

	initDOM() {
		this.date = document.querySelector('#headDate');
		this.text = document.querySelector('#headTxt');
		this.chbx = document.querySelector('#headChbx');
		this.userInfo = JSON.parse(localStorage.getItem('user-info')) || [];
		this.content = document.querySelector('.content__tasks');
		this.addBtn = document.querySelector('#appearTask');
	}

	init() {
		if (location.pathname.endsWith('todo.html')) {
			this.currentUser()
			this.addBtn.addEventListener('click', this.add);
		}
		else return;
	}
}

new AddTask('.head');

export default AddTask;