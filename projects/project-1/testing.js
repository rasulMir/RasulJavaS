import {items} from "./qa.js";

export const startTest = (arr) => {
	let trueAnswers = 0;
	const newArr = arr.slice(0);
	let testLength = +prompt(`Сколько тестов хотите пройти?`, '');

	for (let i = 0; i < testLength; i++) {
		let rand = Math.round(Math.random() * (9 - 0) + 0) - i;

		let testAnswer = prompt(`${i + 1}. ${newArr[rand].qa}\n${newArr[rand].variants.a}\n${newArr[rand].variants.b}\n${newArr[rand].variants.c}\n${newArr[rand].variants.d}` , '');

		if (testAnswer === newArr[rand].answer) trueAnswers++;

		newArr.splice(rand, 1);
	}

	return alert(`Правильные ответы ${trueAnswers} из ${testLength} вопросов.`);
}

// main function
export const getTesting = (fn, arr) => {

	let [history, geography, english] = [...arr];

	let item = +prompt(`Выберите предмет\n1) История\n2)География\n3)Английский`, '');
	if (item === 1) fn(history);
	else if (item === 2) fn(geography);
	else if (item === 3) fn(english);

	if (confirm(`Если хотите заново пройти тест нажмите "ОК" если нет "ОТМЕНА"`)) return getTesting(fn, arr);
	else return window;

};


getTesting(startTest, items);