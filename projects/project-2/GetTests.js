import ChooseItem from "./ChooseItem.js";
import { items } from "./qa.js";

export default class GetTests extends ChooseItem {

	getTestLength() {
		return +prompt(`Сколько тестов хотите пройти?`, '');
	}

	getRand() {
		return Math.floor(Math.random() * this.newArr.length);
	}

	startTest(item) {
		let trueAnswers = 0;
		const newArr = item.slice(0);
		let testLength = this.getTestLength();
		for (let i = 0; i < testLength; i++) {
			let rand = this.getRand();
			let itemRand = newArr[rand], variant = itemRand.variants;
			let testAnswer = prompt(`${i + 1}. ${itemRand.qa}\n${variant.a}\n${variant.b}\n${variant.c}\n${variant.d}` , '');
			if (testAnswer.toLowerCase() === itemRand.answer) trueAnswers++;
			newArr.splice(rand, 1);
		}
		return alert(`Правильные ответы ${trueAnswers} из ${testLength} вопросов.`);
	}

	mainFn(items) {
		this.askName();
		this.getItem();
		this.getItemTests(items);

	}
}
let user = new GetTests();
user.mainFn(items);
console.log(user);
