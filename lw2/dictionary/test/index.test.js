const dictionary = require('../modules/dictionary');
const fs = require('fs');
const defaultDictionary = [{
	enTranslation: "cat",
	ruTranslation: "Кошка"
}];


describe('Dictionary file', () => {
	it("should open dictionary correctly", done => {
		fs.writeFile('test/dictionary.json', JSON.stringify(defaultDictionary), 'utf8', err => {
			if (err) return;
			dictionary.openDictionary('test/dictionary.json', (err) => {
				if (!err) done();
			});
		});
	});

	it("should add words, save changes and translate new word", done => {
		fs.writeFile('test/dictionary.json', JSON.stringify(defaultDictionary), 'utf8', err => {
			if (err) return;
			dictionary.openDictionary('test/dictionary.json', err => {
				if (err) return;
				dictionary.addNewWord('dog', 'Собака');
				dictionary.saveChanges('test/dictionaryResult.json', err => {
					if (err) return;
					dictionary.openDictionary('test/dictionaryResult.json', err => {
						if (dictionary.translate('dog') === 'Собака') done()
					});
				});
			});
		});
	});

	it("should do not open a file that does not exist", done => {
		dictionary.openDictionary('test/blabla.json', (err) => {
			if (err.message === 'Path to dictionary is incorrect') done();
		});
	});
});
