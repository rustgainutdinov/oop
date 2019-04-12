import {Variable} from "../index";

interface fn {
	name: string;
	value: {
		leftArgument: string;
		rightArgument?: string;
		operator?: string
	}
}

class VariableFunction extends Variable {
	protected variables: Array<fn>;
	
	constructor() {
		super();
		this.variables = [];
	}
	
	set(name: string, leftArgument: string, rightArgument?: string, operator?: string) {
		const item: fn = {
			name,
			value: {
				leftArgument,
				rightArgument,
				operator
			}
		};
		
		this.variables.push(item);
		
		// if (this.getVariableItemIndexByName(name) === -1) {
		// 	if (this.checkIdForCorrectness(name)) {
		// 		const fn: any = {
		// 			name,
		// 			value: {
		// 				leftArgument
		// 			}
		// 		};
		//
		// 		if (rightArgument && operator) {
		//
		// 		}
		//
		// 		this.variables.push({
		// 			name, value: {leftArgument}
		// 		});
		// 		return;
		// 	}
		// }
		// throw new VariableError('set');
	}
	
	getFunctionLeftArgument(name: string): string {
		const index = this.getVariableItemIndexByName(name);
		return this.variables[index].value.leftArgument;
	}
	
	getFunctionRightArgument(name: string): string {
		const index = this.getVariableItemIndexByName(name);
		const rightArgument: any = this.variables[index].value.rightArgument;
		
		// if (!this.variables[index].value.rightArgument) {
		// 	throw new VariableError('');
		// }
		
		return rightArgument
	}
	
	getFunctionOperator(name: string): string {
		const index = this.getVariableItemIndexByName(name);
		const operator: any = this.variables[index].value.operator;
		return operator
	}
}

export {VariableFunction, fn}
