import {Value} from "../interfaces/Value";
import {checkIdForCorrectness} from "../methods/check_id_for_correct";

class Variable implements Value {
	private readonly name: string;
	private value?: number;
	
	constructor(name: string, value?: number) {
		if (!checkIdForCorrectness(name)) throw new Error('Incorrect identifier name');
		this.name = name;
		this.value = value;
	}
	
	setValue(value: number): void {
		this.value = value
	}
	
	getValue(): number {
		if (this.value) {
			return this.value
		} else {
			throw new Error('value is not defined')
		}
	};
	
	getName(): string {
		return this.name
	}
}

export {Variable}
