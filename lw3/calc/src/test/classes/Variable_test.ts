import {Variable} from "../../classes/Variable";

const assert = require('assert');

describe('Variable Class', () => {
	it('should create variable "name" with value 1', function () {
		const variable = new Variable('name', 1);
		assert(variable.getName() === 'name');
		assert(variable.getValue() === 1);
	});
	
	it('should create variable', function () {
		const variable = new Variable('variable3', -6.38);
		assert(variable.getName() === 'variable3');
		assert(variable.getValue() === -6.38);
	});
	
	it('should not create variable if name does not match with the rule SR3', function () {
		assert.throws(() => {
			new Variable('3variable', 0)
		}, Error);
	});
	
	it('should not get value if variable is not determined', function () {
		assert.throws(() => {
			const variable = new Variable('variable');
			variable.getValue()
		}, Error)
	});
	
	it('should set value to variable', function () {
		const variable = new Variable('variable');
		variable.setValue(5);
		assert(variable.getValue() === 5);
	});
});
