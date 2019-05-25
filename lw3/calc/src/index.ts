import {Value} from "./interfaces/Value";
import {Variable} from "./classes/Variable";
import {Function, Operator} from "./classes/Function";
// @ts-ignore
import readlineSync from 'readline-sync';

let values: Array<Value> = [];
let variables: Array<Variable> = [];
let functions: Array<Function> = [];

while (true) {
	const command: Array<string> = readlineSync.question('> ').split(' ');
	if (command[0] === 'var') {
		declareVariable(variables, values, command[1]);
	} else if (command[0] === 'let') {
		const variable = declareVariable(variables, values, command[1]);
		setValue(variable, command[3]);
	} else if (command[0] === 'fn') {
		try {
			declareFn(functions, values, command[1], command[3], command[4], command[5]);
		} catch (e) {
			if (e) console.log(e);
		}
	} else if (command[0] === 'print') {
		printValue(values, command[1]);
	} else if (command[0] === 'printvars') {
		variables.forEach(variable => {
			console.log(`${variable.getName()}:`);
			printValue(values, variable.getName());
		});
	} else if (command[0] === 'printfns') {
		functions.forEach(func => {
			console.log(`${func.getName()}:`);
			printValue(values, func.getName());
		});
	} else if (command[0] === '...') {
		break;
	}
}

function getValueFromArr(arr: Array<Value>, name: string): Value | undefined {
	for (let i = 0; i < arr.length; i++) {
		if (values[i].getName() === name) {
			return values[i]
		}
	}
	return undefined
}

function printValue(values: Array<Value>, name: string) {
	const value = getValueFromArr(values, name);
	if (value) {
		try {
			console.log(value.getValue().toFixed(2));
		} catch (e) {
			if (e) console.log('Value is not defined');
		}
	} else {
		console.log('Value is not defined')
	}
}

function setValue(variable: Variable, value: string) {
	if (!isNaN(+value)) {
		variable.setValue(+value);
	} else {
		const variableValue = getValueFromArr(values, value);
		if (variableValue) {
			try {
				variable.setValue(variableValue.getValue());
			} catch (e) {
				if (e) console.log('Value is not defined');
			}
		} else {
			console.log('Value is not defined');
		}
	}
}

function declareVariable(variables: Array<Variable>, values: Array<Value>, name: string): Variable {
	let variable: any = getValueFromArr(values, name);
	if (!variable) {
		variable = new Variable(name);
		variables.push(variable);
		values.push(variable);
	}
	return variable;
}

function declareFn(functions: Array<Function>, values: Array<Value>, name: string, leftArgStr: string, operatorStr: string, rightArgStr: string) {
	let func: any;
	if (!getValueFromArr(values, name)) {
		let operator;
		const leftArg = getValueFromArr(values, leftArgStr);
		const rightArg = getValueFromArr(values, rightArgStr);
		if (leftArg) {
			try {
				if (operatorStr) {
					operator = new Operator(operatorStr);
				}
				func = new Function(name, leftArg, operator, rightArg);
			} catch (e) {
				if (e) throw e;
			}
			functions.push(func);
			values.push(func);
		} else {
			throw new Error('Error')
		}
	} else {
		throw new Error('Error')
	}
}