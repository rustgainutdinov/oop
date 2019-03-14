const executableFile = require('../modules');

describe('Executable file', () => {
	it("should decode html to string", () => {
		const htmlStr = 'Cat &lt;says&gt; &quot;Meow&quot;. M&amp;M&apos;s';
		const expectedResult = 'Cat <says> “Meow“. M&M‘s';
		const result = executableFile.htmlDecode(htmlStr);
		if (result !== expectedResult) {
			throw new Error(`Expected ${expectedResult}, but got ${result}`);
		}
	});

	it("should decode html to string", () => {
		const htmlStr = 'Cat &lt;&lt;&lt;says&gt;&gt;&gt;';
		const expectedResult = 'Cat <<<says>>>';
		const result = executableFile.htmlDecode(htmlStr);
		if (result !== expectedResult) {
			throw new Error(`Expected ${expectedResult}, but got ${result}`);
		}
	});

	it("should decode html to string", () => {
		const htmlStr = 'Cat';
		const expectedResult = 'Cat';
		const result = executableFile.htmlDecode(htmlStr);
		if (result !== expectedResult) {
			throw new Error(`Expected ${expectedResult}, but got ${result}`);
		}
	});
});
