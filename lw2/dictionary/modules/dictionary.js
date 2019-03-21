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
		if (dictionary[i].enTranslation.toLowerCase() === word) return dictionary[i].ruTranslation;
	}
	return null
}

function addNewWord(word, translatedWord, dictionary) {
	const newWorldItem = {
		enTranslation: word,
		ruTranslation: translatedWord
	};
	return dictionary.push(newWorldItem);
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
