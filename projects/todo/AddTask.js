
class AddTask {
	constructor(data) {
		this.head = document.querySelector(data);
		this.initDOM();
		this.init();
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

	appearTasks(parent, task) {
		parent.innerHTML = task.map((e, i) => {
			return `
				<li class="content__items" data-index ="${i}">
					<div class="content__circle-important" data-important="${e.chbx}"></div>
					<p class="content__txt">${e.text}</p>
					<div class="content__date">${e.date}</div>
					<div class="content__btns">
						<button class="content__btns_del" type="button">Delete</button>
						<button class="content__btns_edit" type="button">Edit</button>
					</div>
				</li>
			`;
		}).join('');
	}

	add = () => {
		let item = {
			date : this.getDate(),
			text : this.text.value,
			chbx : this.chbx.checked,
		}

		this.tasks.push(item);
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
		this.appearTasks(this.content, this.tasks);
	}

	initDOM() {
		this.date = document.querySelector('#headDate');
		this.text = document.querySelector('#headTxt');
		this.chbx = document.querySelector('#headChbx');
		this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
		this.content = document.querySelector('.content__tasks');
		this.addBtn = document.querySelector('#appearTask');
	}

	init() {
		if (location.pathname.endsWith('todo.html')) {		
			this.appearTasks(this.content, this.tasks);
			this.addBtn.addEventListener('click', this.add);
		}
		else return;
	}
}

new AddTask('.head');

export default AddTask;