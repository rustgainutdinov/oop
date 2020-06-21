import findMax from './findMax'
import MaxValue from './MaxValue'
import {assert} from 'chai'

describe('Max value function', () => {
	it('should return false if array is empty', () => {
		let maxValue = new MaxValue();
		let arr: any = [];
		assert(!findMax(arr, maxValue));
	});
	it('should find max value in numeric array', function () {
		let maxValue = new MaxValue();
		let arr: any = [2, 99, 19, -100];
		assert(findMax(arr, maxValue) && maxValue.value === 99);
	});
	it('should find max value in char array', function () {
		let maxValue = new MaxValue();
		let arr: any = ['a', 'Z', 'm'];
		assert(findMax(arr, maxValue) && maxValue.value === 'm');
	});
	it('should find max value in string array', function () {
		let maxValue = new MaxValue();
		let arr: any = ['abc', 'abZ', 'abd', 'ab'];
		assert(findMax(arr, maxValue) && maxValue.value === 'abd');
	});
	it('should find max value in boolean array', function () {
		let maxValue = new MaxValue();
		let arr: any = [true, false];
		assert(findMax(arr, maxValue) && maxValue.value === true);
	});
});

