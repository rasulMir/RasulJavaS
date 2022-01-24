class AddTask {
	constructor(data) {
		this.addTask = document.querySelector(data.add);
		this.taskAddBtn = document.querySelector('.head__btn');
		this.tasksList = document.querySelector('.tasks-list');
		this.editTaskWrap = document.querySelector('.edit-task-wrap');
		this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
		this.init();
	}

	dateNow() {
		function z(n) {
			if (n < 10) return '0' + n;
			return n;
		}
		let date = new Date();
		let D = date.getDay();
		let M = date.getMonth();
		let Y = date.getFullYear();
		return `${z(D)}.${z(M)}.${Y}`;
	}

	checkDate() {
		this.taskDate = document.querySelector('#taskDate');
		if (this.taskDate.value) {
			return this.taskDate.value;
		}
		else {
			this.taskDate.setAttribute('date-now', this.dateNow());
			return this.taskDate.getAttribute('date-now');
		}
	}

	tasksTemplate(parent, li) {
		parent.innerHTML = li.map((li, index) => {
			return `
				<li class="tasks-list__items" data-index="item-${index}">
					<div class="tasks-list__importance" data-importance="${li.chbx}"></div>
					<p class="tasks-list__task-txt" data-overline="false">
						${li.text}
					</p>
					<div class="tasks-list__date">${li.date}</div>
					<div class="tasks-list__btns">
						<button class="tasks-list__btns_delete" type="button">Удалить</button>
						<button class="tasks-list__btns_edit" type="button">Изменить</button>
					</div>
				</li>
			`;
		}).join('');
	}

	addTaskToTaskList = (curr) => {
		let current = curr.target;
		this.taskText = document.querySelector('#taskText');
		this.taskChbx = document.querySelector('#taskChbx');
		let storage = {
			text : this.taskText.value,
			chbx : this.taskChbx.checked,
			date : this.checkDate(),
		}
		this.tasks.push(storage);
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
		this.tasksTemplate(this.tasksList, this.tasks);
	}

	exitThisTask(task) {
		if(task.closest('.edit-task__btn_exit')) {
			task.closest('.edit-task-wrap').dataset.hidden = true;
		}
		else return;
	}

	editThisTask(task) {
		if(task.closest('.edit-task__btn_exit')) {
			task.closest('.edit-task-wrap').dataset.hidden = true;
		}
		else return;
	}

	editTask(edit) {
		if (edit.closest('.tasks-list__btns_edit')) {
			document.querySelector('.edit-task-wrap').dataset.hidden = false;
		}
		else return;
	}

	deleteTask(del) {
		if (del.closest('.tasks-list__btns_delete')) {
			let index = del.closest('.tasks-list__items').dataset.index;
			this.tasks.splice(index, 1);
			del.closest('.tasks-list__items').remove();
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
			this.tasksTemplate(this.tasksList, this.tasks);
		}
		else return;
	}

	init() {
		this.tasksTemplate(this.tasksList, this.tasks);
		this.taskAddBtn.addEventListener('click', this.addTaskToTaskList);
		this.tasksList.addEventListener('click', event => {
			let curr = event.target;
			this.deleteTask(curr);
			this.editTask(curr);
		});
		this.editTaskWrap.addEventListener('click', event => {
			let curr = event.target;
			this.exitThisTask(curr);
			this.editThisTask(curr);
		});
	}
}

new AddTask({
	add : '.head__add-task',
});

export default AddTask;