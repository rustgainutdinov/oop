import {Variable} from "../index";
import {VariableError} from "../../error";

interface variable {
	value: number,
	name: string
}

class VariableData extends Variable {
	protected variables: Array<variable>;
	
	constructor() {
		super();
		this.variables = [];
	}
	
	get(name: string): number {
		const returnedValueIndex = this.getVariableItemIndexByName(name);
		if (returnedValueIndex !== -1) {
			return this.variables[returnedValueIndex].value;
		} else {
			throw new VariableError('get');
		}
	}
	
	set(name: string, value: number) {
		if (this.getVariableItemIndexByName(name) === -1) {
			if (this.checkIdForCorrectness(name)) {
				this.variables.push({name, value});
				return;
			}
		}
		throw new VariableError('set');
	}
	
	assignValueToVariable(to: string, value: number) {
		const toVariableIndex = this.getVariableItemIndexByName(to);
		if (toVariableIndex !== -1) {
			this.variables[toVariableIndex].value = value;
		} else {
			this.set(to, value);
		}
	}
	
	assignVariableValueToVariable(from: string, to: string) {
		const fromVariableIndex = this.getVariableItemIndexByName(from);
		if (fromVariableIndex !== -1) {
			const value = this.variables[fromVariableIndex].value;
			this.assignValueToVariable(to, value)
		} else {
			throw new VariableError('assignVariableValueToVariable');
		}
	}
}

export {VariableData}
