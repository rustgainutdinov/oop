const executableFile = require('../modules');

describe('Executable file', () => {
	it("should multiply arr elements to min number", () => {
		const testsArr = [
			{
				data: [3, 4, 1],
				expectedResult: [3, 4, 1],
			},
			{
				data: [2, 4, 3],
				expectedResult: [4, 8, 6],
			}
		];

		let result;

		testsArr.forEach(item => {
			result = executableFile.multipleElementsByMin(item.data);
			result.forEach((resultItem, i) => {
				if (resultItem !== item.expectedResult[i]) {
					throw new Error(`Expected ${item.expectedResult}, but got ${result}`);
				}
			});
		})
	});

	it("should multiply arr of float num elements to min number", () => {
		const testsArr = [
			{
				data: [1.2, 1.9, 9.1],
				expectedResult: [1.44, 2.28, 10.92],
			}
		];

		let result;

		testsArr.forEach(item => {
			result = executableFile.multipleElementsByMin(item.data);
			result.forEach((resultItem, i) => {
				if (resultItem !== item.expectedResult[i]) {
					throw new Error(`Expected ${item.expectedResult}, but got ${result}`);
				}
			});
		})
	});

	it("should multiply arr of float num elements to min number", () => {
		const testsArr = [
			{
				data: [-1.2, 1.9, 9.1],
				expectedResult: [1.44, -2.28, -10.92],
			}
		];

		let result;

		testsArr.forEach(item => {
			result = executableFile.multipleElementsByMin(item.data);
			result.forEach((resultItem, i) => {
				if (resultItem !== item.expectedResult[i]) {
					throw new Error(`Expected ${item.expectedResult}, but got ${result}`);
				}
			});
		})
	});
});
