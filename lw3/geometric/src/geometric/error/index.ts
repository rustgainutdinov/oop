class GeometricError {
	message: string;
	name: string;
	stack: any;
	
	constructor(message: string) {
		this.message = message ? message : '';
		this.name = 'GeometricError';
		this.stack = (new Error(message)).stack
	}
}

GeometricError.prototype = Object.create(Error.prototype);
GeometricError.prototype.constructor = GeometricError;

export {GeometricError}
