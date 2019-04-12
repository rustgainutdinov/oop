import {VariableData} from '../../calculator/variable/data'
import {VariableError} from '../../calculator/error'

const assert = require('assert');

function TestVariableData() {
	it('Should set and get variable with value 1', () => {
		let variables = new VariableData();
		variables.set('a', 1);
		assert(variables.get('a') === 1);
	});
	
	it('Should set and get a lot of variables with different values', () => {
		let variables = new VariableData();
		variables.set('a', -1);
		variables.set('b', 2);
		variables.set('c', 4.828);
		assert(variables.get('a') === -1);
		assert(variables.get('b') === 2);
		assert(variables.get('c') === 4.828);
	});
	
	it('Should not set variable with the same name twice', () => {
		let variables = new VariableData();
		variables.set('a', 2);
		
		try {
			variables.set('a', 5);
			throw new Error('Error: successfully twice set variable with the same name');
		} catch (err) {
			if (!(err instanceof VariableError)) throw err;
		}
	});
	
	it('Should not get rubbish', () => {
		try {
			let variables = new VariableData();
			variables.get('a');
			throw new Error('Error: successfully get rubbish');
		} catch (err) {
			if (!(err instanceof VariableError)) throw err;
		}
	});
	
	it('Should check identifier for rule', () => {
		let variables = new VariableData();
		try {
			variables.set('a', 5);
			variables.set('Number', 72);
			variables.set('num1', 29);
			variables.set('variable_with_value_2', 32);
			variables.set('_2', 32);
			assert(variables.get('a') === 5);
			assert(variables.get('Number') === 72);
			assert(variables.get('num1') === 29);
			assert(variables.get('variable_with_value_2') === 32);
			assert(variables.get('_2') === 32);
		} catch (err) {
			throw err;
		}
		
		try {
			variables.set('1num', 1);
			throw new Error('Error: do not check identifier for rule');
		} catch (err) {
			if (!(err instanceof VariableError)) throw err;
		}
		
		try {
			variables.set('переменная', 89);
			throw new Error('Error: do not check identifier for rule');
		} catch (err) {
			if (!(err instanceof VariableError)) throw err;
		}
		
		try {
			variables.set('variable with value 2', 89);
			throw new Error('Error: do not check identifier for rule');
		} catch (err) {
			if (!(err instanceof VariableError)) throw err;
		}
	});
	
	it('Should assign a value to a variable', () => {
		let variables = new VariableData();
		variables.set('a', 5);
		variables.set('b', -10);
		variables.assignValueToVariable('a', 35);
		assert(variables.get('a') === 35);
		variables.assignValueToVariable('b', 72);
		assert(variables.get('b') === 72);
		variables.assignValueToVariable('a', -5);
		assert(variables.get('a') === -5);
	});
	
	it('Should assign a variable value to a variable', () => {
		let variables = new VariableData();
		variables.set('a', 5);
		variables.set('b', 10);
		variables.set('c', 60);
		variables.assignVariableValueToVariable('a', 'b');
		assert(variables.get('b') === 5);
		variables.assignVariableValueToVariable('c', 'b');
		assert(variables.get('b') === 60);
		variables.assignVariableValueToVariable('b', 'a');
		assert(variables.get('a') === 60);
	});
	
	it('Should assign a value to a variable and set variable if accepted variable is not defined', () => {
		let variables = new VariableData();
		variables.assignValueToVariable('a', 35);
		assert(variables.get('a') === 35);
		variables.assignValueToVariable('b', 72);
		assert(variables.get('b') === 72);
	});
	
	it('Should assign a variable value to a variable and set variable if accepted variable is not defined', () => {
		let variables = new VariableData();
		variables.set('c', 35);
		variables.set('d', 4);
		variables.assignVariableValueToVariable('c', 'a');
		assert(variables.get('a') === 35);
		variables.assignVariableValueToVariable('c', 'b');
		assert(variables.get('b') === 35);
		variables.assignVariableValueToVariable('d', 'e');
		assert(variables.get('e') === 4);
	});
	
	it('Should not assign a variable value to a variable if a variable value is not defined', () => {
		let variables = new VariableData();
		try {
			variables.assignVariableValueToVariable('c', 'a');
			throw new Error('Error: do not check if variable value is not defined');
		} catch (err) {
			if (!(err instanceof VariableError)) throw err;
		}
		
	});
}

export {TestVariableData}
