function generatePrimeNumbersSet(maxVal) {
	const maxValSqr = Math.ceil(Math.pow(maxVal, 0.5));
	let primeNumbersBoolArr = new Array(maxVal);
	let x, y = x = 0;
	let primeNumbersSet = new Set();
	primeNumbersBoolArr[2] = true;
	primeNumbersBoolArr[3] = true;

	for (let i = 1; i <= maxValSqr; i++) {
		x += 2 * i - 1;
		y = 0;
		for (let j = 1; j <= maxValSqr; j++) {
			y += 2 * j - 1;
			let n = 4 * x + y;
			(n <= maxVal) && (n % 12 === 1 || n % 12 === 5) && (primeNumbersBoolArr[n] = !primeNumbersBoolArr[n]);
			n -= x;
			(n <= maxVal) && (n % 12 === 7) && (primeNumbersBoolArr[n] = !primeNumbersBoolArr[n]);
			n -= 2 * y;
			(n <= maxVal) && (i > j) && (n % 12 === 11) && (primeNumbersBoolArr[n] = !primeNumbersBoolArr[n]);
		}
	}

	for (let i = 0; i <= maxValSqr; i++) {
		if (primeNumbersBoolArr[i] && (i % 3 !== 0 || i === 3) && (i % 5 !== 0 || i === 5)) {
			let n = i * i;
			for (let j = n; j <= maxVal; j += n)
				primeNumbersBoolArr[j] && (primeNumbersBoolArr[j] = undefined);
			primeNumbersSet.add(i)
		}
	}

	for (let i = maxValSqr; i <= maxVal; i++)
		primeNumbersBoolArr[i] && (i % 3 !== 0 || i === 3) && (i % 5 !== 0 || i === 5) && primeNumbersSet.add(i);

	return primeNumbersSet
}

module.exports = {
	generatePrimeNumbersSet
};
