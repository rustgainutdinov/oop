import {fn, VariableFunction} from '../../calculator/variable/fn'
// import {VariableError} from '../../calculator/error'

const assert = require('assert');

function TestVariableFunction() {
	it('Should set and get functions with left argument', () => {
		let variables = new VariableFunction();
		let testedValues: Array<fn>;
		testedValues = [
			{
				name: 'fn1',
				value: {
					leftArgument: 'b',
				}
			},
			{
				name: 'fn4',
				value: {
					leftArgument: 'b',
				}
			},
			{
				name: 'func',
				value: {
					leftArgument: 'left',
				}
			}
		];
		
		testedValues.forEach(item => {
			variables.set(item.name, item.value.leftArgument, item.value.rightArgument, item.value.operator);
			assert(variables.getFunctionLeftArgument(item.name) === item.value.leftArgument)
		});
	});
	
	it('Should set and get functions with 2 arguments', () => {
		let variables = new VariableFunction();
		let testedValues: Array<fn>;
		testedValues = [
			{
				name: 'fn1',
				value: {
					leftArgument: 'b',
					rightArgument: 'a',
					operator: '*'
				}
			},
			{
				name: 'fn4',
				value: {
					leftArgument: 'b',
					rightArgument: 'c',
					operator: '/'
				}
			},
			{
				name: 'func',
				value: {
					leftArgument: 'left',
					rightArgument: 'right',
					operator: '+'
				}
			}
		];
		
		testedValues.forEach(item => {
			variables.set(item.name, item.value.leftArgument, item.value.rightArgument, item.value.operator);
			assert(variables.getFunctionLeftArgument(item.name) === item.value.leftArgument);
			assert(variables.getFunctionRightArgument(item.name) === item.value.rightArgument);
			assert(variables.getFunctionOperator(item.name) === item.value.operator);
		});
	});
}


export {TestVariableFunction}
