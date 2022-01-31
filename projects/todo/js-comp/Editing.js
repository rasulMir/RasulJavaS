import AddTask from "./AddTask.js";
class Editing extends AddTask {
	constructor(el) {
		super();
		this.contentBtns = document.querySelector(el);
		this.contentTasks = document.querySelector('.content__tasks');
		this.editTasksWrap = document.querySelector('.edit-tasks-wrap');
		this.editTasksBtns = document.querySelector('.edit-tasks__btns');
		this.editCurrtxt = document.querySelector('#editTask');
		this.editCurrDate = document.querySelector('#editDate');
		this.editCurrChbx = document.querySelector('#editChbx');
		this.initEditing();
	}

	checkImportant = (curr) => {
		let currCircle = curr.closest('.content__circle-important');
		if (currCircle) {
			let ind = currCircle.closest('.content__items').dataset.index;
			this.userInfo.forEach(e => {
				if (e.current) {
					if (!e.tasks[ind].chbx) {
						currCircle.dataset.important = true;
						e.tasks[ind].chbx = true;
					}
					else {
						currCircle.dataset.important = '';
						e.tasks[ind].chbx = '';
					}
				}
			});
			this.currentUser();
			localStorage.setItem('user-info', JSON.stringify(this.userInfo));
		}
	}

	isAdmin() {
		this.userInfo.forEach(user => {
			
		});
		return;
	}

	delTask(del) {
		if (del.closest('.content__btns_del')) {
			let ind = del.closest('.content__items').dataset.index;
			this.userInfo.forEach(user => {
				if (user.current) {
					del.closest('.content__items').remove();
					user.tasks.splice(ind, 1);
				}
			});
			localStorage.setItem('user-info', JSON.stringify(this.userInfo));
		}
		else return;
	}

	editCurrentTask = (curr) => {
		if (curr.closest('.edit-tasks__btns_edit')) {
			this.userInfo.forEach(e => {
				if (e.current) {
					e.tasks[this.curentTaskInd].date = this.editCurrDate.value;
					e.tasks[this.curentTaskInd].text = this.editCurrtxt.value;
					e.tasks[this.curentTaskInd].chbx = this.editCurrChbx.checked;
				}
			});

			this.currentUser();
			localStorage.setItem('user-info', JSON.stringify(this.userInfo));
			this.displayEditTaskWrap(curr, '.edit-tasks__btns_edit');
		}
		else return;
	}

	currentTaskOnEditTaskWrap = (curr, sel) => {
		if (curr.closest(sel) && this.editTasksWrap.dataset.visible) {
			this.userInfo.forEach(e => {
				if (e.current) {
					this.editCurrDate.value = e.tasks[this.curentTaskInd].date;
					this.editCurrtxt.value = e.tasks[this.curentTaskInd].text;
					this.editCurrChbx.checked = (e.tasks[this.curentTaskInd].chbx) ? true : '';
				}
			});
		}
		else return;
	}

	taskDone(curr) {
		let txt = curr.closest('.content__txt');
		if (txt) {
			let ind = txt.closest('.content__items').dataset.index;
			this.userInfo.forEach(user => {
				if (user.current) {
					if (!user.tasks[ind].underline) {
						user.tasks[ind].underline = true;
					}
					else user.tasks[ind].underline = '';
				}
			});
			this.currentUser();
			localStorage.setItem('user-info', JSON.stringify(this.userInfo));
		}
		else return;
	}

	displayEditTaskWrap(curr, sel, bool = false) {

		if (curr.closest(sel)) {
			let visible = !!this.editTasksWrap.dataset.visible;
			if (!visible) {
				this.editTasksWrap.dataset.visible = !visible;
			}
			else this.editTasksWrap.dataset.visible = '';
			if (bool) {
				return curr.closest('.content__items').dataset.index;
			}
		}
		else return;
	}

	initEditing() {
		if (location.pathname.endsWith('todo.html')) {
			this.displayLogin();
			this.contentTasks.addEventListener('click', event => {
				let curr = event.target;
				this.checkImportant(curr);
				this.taskDone(curr);
				this.delTask(curr);
				this.curentTaskInd = this.displayEditTaskWrap(curr, '.content__btns_edit', true);
				this.currentTaskOnEditTaskWrap(curr, '.content__btns_edit');
			});

			this.editTasksWrap.addEventListener('click', event => {
				let curr = event.target;
				this.displayEditTaskWrap(curr, '.edit-tasks__btns_exit');
				this.editCurrentTask(curr);
			});
		}
	}

}

new Editing('.content__btns');

export default Editing;