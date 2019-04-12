class VariableError {
	method: string;
	name: string;
	stack: any;
	
	constructor(method: string) {
		const message = `Variable ${method} error`;
		this.method = method;
		this.name = 'VariableError';
		this.stack = (new Error(message)).stack
	}
}

VariableError.prototype = Object.create(Error.prototype);
VariableError.prototype.constructor = VariableError;

export {VariableError}
