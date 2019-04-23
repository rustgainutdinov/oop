import {GeometricError} from './geomenricError';

class ColorError extends GeometricError {
	constructor(message: string) {
		super(message);
		this.name = 'ColorError';
	}
}

export {ColorError};
