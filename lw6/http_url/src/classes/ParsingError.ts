class ParsingError extends Error {
	constructor(message: string) {
		super();
		this.message = message
	}
}

export default ParsingError;
