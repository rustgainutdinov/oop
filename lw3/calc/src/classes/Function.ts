import {Value} from "../interfaces/Value";
import {checkIdForCorrectness} from "../methods/check_id_for_correct";

type OperatorFunction = (a: number, b: number) => number;

class Operator {
	readonly func: OperatorFunction;
	
	constructor(str: string) {
		if (str === '+') {
			this.func = (a: number, b: number): number => a + b
		} else if (str === '-') {
			this.func = (a: number, b: number): number => a - b
		} else if (str === '*') {
			this.func = (a: number, b: number): number => a * b
		} else if (str === '/') {
			this.func = (a: number, b: number): number => a / b
		} else {
			throw Error('operator is not defined')
		}
	}
}

class Function implements Value {
	private readonly name: string;
	private readonly leftArg: Value;
	private readonly operator?: Operator;
	private readonly rightArg?: Value;
	
	constructor(name: string, leftArg: Value, operator?: Operator, rightArg?: Value) {
		if (!checkIdForCorrectness(name)) throw new Error('Incorrect identifier name');
		this.name = name;
		this.leftArg = leftArg;
		this.operator = operator;
		this.rightArg = rightArg;
	}
	
	getName(): string {
		return this.name
	}
	
	getValue(): number {
		if (this.operator && this.rightArg) {
			return this.operator.func(this.leftArg.getValue(), this.rightArg.getValue());
		} else {
			return this.leftArg.getValue()
		}
	}
}

export {Operator, Function}
