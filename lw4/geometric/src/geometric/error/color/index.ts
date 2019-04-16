import {GeometricError} from "../index";

class ColorError extends GeometricError {
	constructor(message: string) {
		super(message);
		this.name = 'ColorError';
	}
}

export {ColorError};
