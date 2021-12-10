import Testing from "./testing.js";

export default class ChooseItem extends Testing {
	getItem() {
		let item = +prompt(`Выберите предмет\n1) История\n2)География\n3)Английский`, '');
		if (!isFinite(item)) {
			alert(`Пожалуйста выберите вводом числа!!!`);
			return this.getItem();
		}
		return item;
	}

	retesting() {
		if (confirm(`Если хотите заново пройти тест нажмите "ОК" если нет "ОТМЕНА"`)) return this.getItem();
		return window;
	}

	getItemTests(items) {
		let itemNum = this.getItem();
		if (itemNum)  this.startTest(items[itemNum - 1])
	}
}