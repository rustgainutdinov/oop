const dictionary = require('../modules/dictionary');
const fs = require('fs');
const defaultDictionary = [{
	word: "cat",
	translation: "кошка"
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

	it('should translate world', () => {
		const translatedWorld = dictionary.translate('cat', defaultDictionary);
		if (translatedWorld !== 'кошка') throw new Error(`Expected кошка, but got '${translatedWorld}'`);
	});

	it('should add new word in dictionary and translate it', () => {
		const modifiedDictionary = dictionary.addNewWord('dog', 'собака', defaultDictionary);
		const translatedWorld = dictionary.translate('dog', modifiedDictionary);
		if (translatedWorld !== 'собака') throw new Error(`Expected собака, but got '${translatedWorld}'`);
	});

	it('should modified dictionary', done => {
		fs.writeFile('test/dictionary2.json', JSON.stringify(defaultDictionary), 'utf8', err => {
			if (err) return;
			const modifiedDictionary = dictionary.addNewWord('dog', 'собака', defaultDictionary);
			dictionary.saveChanges('test/dictionary2.json', modifiedDictionary);
			done();
		});
	});

	it('should save changes in dictionary', done => {
		fs.writeFile('test/dictionary2.json', JSON.stringify(defaultDictionary), 'utf8', err => {
			if (err) return;
			const modifiedDictionary = dictionary.addNewWord('dog', 'собака', defaultDictionary);
			dictionary.saveChanges('test/dictionary2.json', modifiedDictionary);
			done();
		});
	});

	// it("should add words, save changes and translate new word and world in arbitrary register", done => {
	// 	fs.writeFile('test/dictionary.json', JSON.stringify(defaultDictionary), 'utf8', err => {
	// 		if (err) return;
	// 		dictionary.openDictionary('test/dictionary.json', err => {
	// 			if (err) return;
	// 			dictionary.addNewWord('dog', 'Собака');
	// 			dictionary.addNewWord('faTHer', 'Отец');
	// 			dictionary.saveChanges('test/dictionaryResult.json', err => {
	// 				if (err) return;
	// 				dictionary.openDictionary('test/dictionaryResult.json', err => {
	// 					if (dictionary.translate('dog') === 'Собака')
	// 						if (dictionary.translate('Father') === 'Отец') done()
	// 				});
	// 			});
	// 		});
	// 	});
	// });
});
