class Variable {
	protected variables: Array<{ name: string }>;
	
	constructor() {
		this.variables = [];
	}
	
	checkIdForCorrectness(name: string): boolean {
		const rexgepResult: any = name.match(/[a-z_](\w)*/ig);
		if (rexgepResult && rexgepResult[0] === name) {
			return true
		} else {
			return false
		}
	}
	
	getVariableItemIndexByName(name: string): number {
		let returnedValueIndex: number = -1;
		
		function checkForEqualName(item: any, i: number): boolean {
			if (item.name === name) {
				returnedValueIndex = i;
				return true
			} else {
				return false
			}
		}
		
		this.variables.some(checkForEqualName);
		return returnedValueIndex
	}
}

export {Variable}
