const fs = require('fs');
let dictionary = [];
let dictionaryOfNewWords = [];

function openDictionary(pathToDictionary, cb) {
	fs.readFile(pathToDictionary, 'utf8', (err, file) => {
		if (err) return cb(new Error('Path to dictionary is incorrect'));
		dictionary = JSON.parse(file);
		cb(null);
	});
}

function translate(word) {
	word = word.toLowerCase();
	for (let i = 0; i < dictionary.length; i++) {
		if (dictionary[i].enTranslation.toLowerCase() === word) return dictionary[i].ruTranslation;
	}
}

function addNewWord(word, translatedWord) {
	const newWorldItem = {
		enTranslation: word,
		ruTranslation: translatedWord
	};
	dictionaryOfNewWords.push(newWorldItem);
	dictionary.push(newWorldItem)
}

function saveChanges(pathToDictionary, cb) {
	fs.writeFile(pathToDictionary, JSON.stringify(dictionary), 'utf8', cb);
}

module.exports = {
	openDictionary,
	translate,
	addNewWord,
	saveChanges
};
