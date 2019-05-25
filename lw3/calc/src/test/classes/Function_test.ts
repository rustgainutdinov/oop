import {Function, Operator} from "../../classes/Function";
import {Variable} from "../../classes/Variable";

const assert = require('assert');

describe('Operator class', () => {
	it('should get function by stright oprrator', function () {
		const operator = new Operator('+');
		assert(operator.func(4, 5) === 9);
	});
});

describe('Function Class', () => {
	it('should create function "name" with value 1', function () {
		const variable = new Variable('var1', 1);
		const fn = new Function('name', variable);
		assert(fn.getName() === 'name');
		assert(fn.getValue() === 1);
	});
	
	it('should create function', function () {
		const variable = new Variable('var1', -6.38);
		const fn = new Function('fun3', variable);
		assert(fn.getName() === 'fun3');
		assert(fn.getValue() === -6.38);
	});
	
	it('should create function with two arguments', function () {
		const variable1 = new Variable('var1', -6);
		const variable2 = new Variable('var2', 9);
		const operator = new Operator('+');
		const fn = new Function('func4', variable1, operator, variable2);
		assert(fn.getValue() === 3);
	});
	
	it('should not create variable if name does not match with the rule SR3', function () {
		assert.throws(() => {
			const variable1 = new Variable('var1', 9);
			new Function('3variable', variable1)
		}, Error);
	});
	
	it('should should not get value if arguments are not determinate', function () {
		const variable1 = new Variable('var1', -6);
		const variable2 = new Variable('var2');
		const operator = new Operator('+');
		const fn = new Function('func4', variable1, operator, variable2);
		assert.throws(() => {
			fn.getValue()
		}, Error);
	});
});
