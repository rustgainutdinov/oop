import {assert} from 'chai';
import MyArray from './MyArray';

describe('MyArray class', () => {
	it('should add items of type num', () => {
		let arr = new MyArray();
		assert(arr.len === 0);
		arr.add(748);
		arr.add(34);
		arr.add(56);
		assert(arr.len === 3);
	});
	it('should add items of type string', () => {
		let arr = new MyArray();
		assert(arr.len === 0);
		arr.add('abnd');
		arr.add('djbdbs');
		assert(arr.len === 2);
	});
	it('should add items to the end', () => {
		let arr = new MyArray();
		const firstNumber = 23;
		const thirdNumber = 12;
		arr.add(firstNumber);
		arr.add(56);
		arr.add(thirdNumber);
		assert(arr.get(0) === firstNumber);
		assert(arr.get(2) === thirdNumber);
	});
	it('should add throw exception if index is out of range', () => {
		let arr = new MyArray();
		assert.throws(() => {
			arr.get(0)
		}, 'OutOfRangeException');
		arr.add(52);
		arr.get(0);
		arr.add(56);
		arr.add(45);
		arr.add(12);
		assert.throws(() => {
			arr.get(-1)
		}, 'OutOfRangeException');
		assert.throws(() => {
			arr.get(9999)
		}, 'OutOfRangeException');
	});
	it('Should cut array if resize length less than actual', () => {
		let arr = new MyArray();
		const firstNumber = 23;
		const secondNumber = 12;
		arr.add(firstNumber);
		arr.add(secondNumber);
		arr.add(222);
		arr.add(4325);
		arr.add(12);
		assert(arr.len === 5);
		arr.resize(2);
		assert(arr.get(0) === firstNumber);
		assert(arr.get(1) === secondNumber);
		assert(arr.len === 2);
	});
	it('Should add nullable values to array if resize length more than actual', () => {
		let arr = new MyArray();
		arr.add(222);
		arr.add(4325);
		arr.add(12);
		assert(arr.len === 3);
		arr.resize(5);
		assert(arr.get(3) === null);
		assert(arr.get(4) === null);
		assert(arr.len === 5);
	});
	it('Should clear array', () => {
		let arr = new MyArray();
		arr.add(222);
		arr.add(4325);
		arr.add(12);
		assert(arr.len === 3);
		arr.clear();
		assert(arr.len === 0);
		assert.throws(() => {
			arr.get(0)
		}, 'OutOfRangeException');
	});
	it('Should create new array with copied elements', () => {
		let arr = new MyArray();
		const firstNumber = 23;
		const secondNumber = 12;
		const thirdNumber = 12;
		arr.add(firstNumber);
		arr.add(secondNumber);
		arr.add(thirdNumber);
		let newArr = MyArray.copyCreate(arr);
		assert(newArr.len === 3);
		assert(newArr.get(0) === firstNumber);
		assert(newArr.get(1) === secondNumber);
		assert(newArr.get(2) === thirdNumber);
	})
});
