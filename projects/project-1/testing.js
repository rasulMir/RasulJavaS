import {items} from "./qa.js";
export const startTest = (arr) => {
	let trueAnswers = 0;
	const newArr = arr.slice(0);
	let testLength = +prompt(`Сколько тестов хотите пройти?`, '');
	for (let i = 0; i < testLength; i++) {
		let rand = Math.floor(Math.random() * newArr.length);
		let itemRand = newArr[rand], variant = itemRand.variants;
		let testAnswer = prompt(`${i + 1}. ${itemRand.qa}\n${variant.a}\n${variant.b}\n${variant.c}\n${variant.d}` , '');
		if (testAnswer.toLowerCase() === itemRand.answer) trueAnswers++;
		newArr.splice(rand, 1);
	}
	return alert(`Правильные ответы ${trueAnswers} из ${testLength} вопросов.`);
}
// main function
export const getTesting = (fn, arr) => {
	let item = +prompt(`Выберите предмет\n1) История\n2)География\n3)Английский`, '');
	if (item) fn(arr[item - 1]);
	if (confirm(`Если хотите заново пройти тест нажмите "ОК" если нет "ОТМЕНА"`)) return getTesting(fn, arr);
	return window;
};

//getTesting(startTest, items);
