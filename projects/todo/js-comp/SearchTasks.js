class SearchTasks {
	constructor(search) {
		this.search = document.querySelector(search);
		this.init();
	}

	checkTaskText = () => {
		let tasks = document.querySelectorAll('.content__txt');
		tasks.forEach(elem => {
			if (elem.textContent.startsWith(this.search.value)) {
				elem.closest('li').style.display = '';
			}
			else elem.closest('li').style.display = 'none';
		});
	}

	init() {
		if (location.pathname.endsWith("todo.html")) {
			this.search.addEventListener('input', this.checkTaskText);
		}
		else return;
	}
}

new SearchTasks('.content__top-search');

export default SearchTasks;