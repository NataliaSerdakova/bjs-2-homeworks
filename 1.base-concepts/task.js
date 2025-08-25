"use strict"

function solveEquation(a, b, c) {
	const discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const sqrtD = Math.sqrt(discriminant);

		const root1 = (-b + sqrtD) / (2 * a);
		const root2 = (-b - sqrtD) / (2 * a);
		return [root1, root2];
	}
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = (percent / 100) / 12;
	const loanAmount = amount - contribution;

	if (loanAmount <= 0) {
		return 0;
	}

	const numerator = monthlyPercent * Math.pow(1 + monthlyPercent, countMonths);
	const denominator = Math.pow(1 + monthlyPercent, countMonths) - 1;
	const annuityPayment = loanAmount * (numerator / denominator);

	const totalPayment = annuityPayment * countMonths;

	return Number(totalPayment.toFixed(2));
}