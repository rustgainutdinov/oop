const fs = require('fs');

function openDictionary(pathToDictionary, cb) {
	fs.readFile(pathToDictionary, 'utf8', (err, file) => {
		if (err) return cb(new Error('Path to dictionary is incorrect'));
		cb(null, JSON.parse(file));
	});
}

function translate(word, dictionary) {
	word = word.toLowerCase();
	for (let i = 0; i < dictionary.length; i++) {
		if (dictionary[i].word.toLowerCase() === word) return dictionary[i].translation;
	}
	return null
}

function addNewWord(word, translatedWord, dictionary) {
	let modifiedDictionary = dictionary.slice();

	const newWorldItem = {
		word: word,
		translation: translatedWord
	};

	modifiedDictionary.push(newWorldItem);

	return modifiedDictionary;
}

function saveChanges(pathToDictionary, dictionary) {
	fs.writeFileSync(pathToDictionary, JSON.stringify(dictionary), 'utf8');
}

module.exports = {
	openDictionary,
	translate,
	addNewWord,
	saveChanges
};
