const dictionary = require('../modules/dictionary');
const fs = require('fs');
const defaultDictionary = [{
	enTranslation: "cat",
	ruTranslation: "Кошка"
}];


describe('Dictionary file', () => {
	it("should do not open a file that does not exist", done => {
		dictionary.openDictionary('test/blabla.json', (err) => {
			if (err.message === 'Path to dictionary is incorrect') done();
		});
	});

	it("should open dictionary correctly", done => {
		fs.writeFile('test/dictionary.json', JSON.stringify(defaultDictionary), 'utf8', err => {
			if (err) return;
			dictionary.openDictionary('test/dictionary.json', (err) => {
				if (!err) done();
			});
		});
	});

	it("should add words, save changes and translate new word and world in arbitrary register", done => {
		fs.writeFile('test/dictionary.json', JSON.stringify(defaultDictionary), 'utf8', err => {
			if (err) return;
			dictionary.openDictionary('test/dictionary.json', err => {
				if (err) return;
				dictionary.addNewWord('dog', 'Собака');
				dictionary.addNewWord('faTHer', 'Отец');
				dictionary.saveChanges('test/dictionaryResult.json', err => {
					if (err) return;
					dictionary.openDictionary('test/dictionaryResult.json', err => {
						if (dictionary.translate('dog') === 'Собака')
							if (dictionary.translate('Father') === 'Отец') done()
					});
				});
			});
		});
	});
});
