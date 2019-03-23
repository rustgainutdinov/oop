const generatePrimeNumbersSet = require('../modules').generatePrimeNumbersSet;

describe('Prime numbers generator', () => {
	const testsData = [
		{value: 0, correctResult: 0, timeout: 1000},
		{value: 100, correctResult: 25, timeout: 1000},
		{value: 100000, correctResult: 9592, timeout: 1000},
		{value: 100000000, correctResult: 5761455, timeout: 20000},
	];

	for (let test of testsData)
		it(`should generate ${test.correctResult} prime numbers in the range of 0 to ${test.value}, faster than ${test.timeout}ms`, () => {
			const result = generatePrimeNumbersSet(test.value).size;
			if (result !== test.correctResult)
				throw new Error(`Expected ${test.correctResult}, but got ${result}`)
		}).timeout(test.timeout);
});
