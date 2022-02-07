class Credit {
	constructor() {
		this.creditSumm = document.querySelector('#creditSumm');
		this.creditTerm = document.querySelector('#creditTerm');
		this.creditPercent = document.querySelector('#creditPercent');
		this.creditCalcBtn = document.querySelector('.credit__calc-btn');
		this.creditForm = document.querySelector('.credit__form');
		this.TBody = document.querySelector('#TBody');
		this.init();
	}

	annuitetCalc(summ, term, perc) {
		let i, koef, result;
		i = (perc / 12) / 100;
		koef = (i * (Math.pow(1 + i, term))) / (Math.pow(1 + i, term) - 1);
		result = summ * koef;
		return result.toFixed(3);
	}

	templeTR(sum, perc, pay, overPay, all) {
		return `
			<tr>
				<td>${sum}</td>
				<td>${perc}%</td>
				<td>${pay}</td>
				<td>${overPay}</td>
				<td>${all}</td>
			</tr>
		`;
	}

	creditCalcHandler = () => {
		Array.from(this.TBody.children).forEach(tr => tr.remove());
		this.summ = +this.creditSumm.value;
		this.term = +this.creditTerm.value;
		this.perc = +this.creditPercent.value;
		this.form = this.creditForm.value;
		if (this.form === 'Аннуитет') {
			let monthlyPay = this.annuitetCalc(this.summ, this.term, this.perc);
			let all = (monthlyPay * this.term).toFixed(3);
			let overPay = (all - this.summ).toFixed(3);
			let tr = this.templeTR(this.summ, this.perc, monthlyPay, overPay, all);
			this.TBody.insertAdjacentHTML('beforeend', tr);
		}
	}

	init() {
		this.creditCalcBtn.addEventListener('click', this.creditCalcHandler);
	}
}

new Credit;