const read = require('read');
var readlineSync = require('readline-sync');
const dictionary = require('./modules/dictionary');

function errHandler(err) {
	console.log(err.message);
}

function readFromCL(cb) {
	if (!cb) return;
	read({prompt: 'Введите слово на английском: '}, (err, word) => {
		if (err) throw err;
		if (word === '') return cb(readFromCL);
		if (word === '...') {
			if (!wereChangesFlag) return cb(null);
			read({prompt: 'В словарь были внесены изменения. Введите Y или y для сохранения перед выходом.'}, (err, saveFlag) => {
				if (saveFlag.toLowerCase() === 'y') {
					dictionary.saveChanges(pathToDictionary, err => {
						if (err) throw err;
						console.log('Изменения сохранены. До свидания.');
						cb(null);
					});
				} else {
					console.log('Изменения не сохранены. До свидания.');
					cb(null);
				}
			});
		} else {
			const translatedWord = dictionary.translate(word);
			if (!translatedWord) {
				read({prompt: `Неизвестное слово “${word}”. Введите перевод или пустую строку для отказа.`}, (err, translatedWord) => {
					if (err) throw err;
					if (translatedWord) {
						dictionary.addNewWord(word, translatedWord);
						console.log(`Слово “${word}” сохранено в словаре как “${translatedWord}”.`);
						wereChangesFlag = true;
					} else {
						console.log(`Слово “${word}” проигнорировано.`);
					}
					cb(readFromCL);
				});
			} else {
				console.log(translatedWord);
				cb(readFromCL);
			}
		}
	});
}

function askWord() {
	return readlineSync.question('Введите слово: ')
}

function askWordTranslation(word) {
	return readlineSync.question(`Неизвестное слово “${word}”. Введите перевод или пустую строку для отказа.`)
}

function sayDictionaryModifiedState(word, translatedWord) {
	if (!translatedWord) console.log(`Слово “${word}” проигнорировано.`);
	else console.log(`Слово “${word}” сохранено в словаре как “${translatedWord}”.`);
}

function askAboutSavingChanges() {
	return readlineSync.question('В словарь были внесены изменения. Введите Y или y для сохранения перед выходом.')
}

function sayAboutDictionarySaving(dictionarySaving) {
	console.log(`Изменения ${dictionarySaving ? '' : 'не '}сохранены. До свидания.`);
}


function talkWithUser(wordsDictionary, pathToDictionary) {
	let continueDialog = true;
	let wereChangesFlag = false;
	while (continueDialog) {
		console.log(wordsDictionary);
		const word = askWord();
		if (word === '...') {
			continueDialog = false;
			if (!wereChangesFlag) continue;
			const savingChangesFlag = askAboutSavingChanges().toLowerCase() === 'y';
			if (savingChangesFlag) dictionary.saveChanges(wordsDictionary, pathToDictionary);
			sayAboutDictionarySaving(savingChangesFlag);
		}
		let translatedWord = dictionary.translate(word, wordsDictionary);
		if (!translatedWord) {
			const translationOfWord = askWordTranslation(word);
			sayDictionaryModifiedState(word, translationOfWord);
			if (translationOfWord === '') {
				wordsDictionary = dictionary.addNewWord(word, translationOfWord, wordsDictionary);
				wereChangesFlag = true;
			}
			continue
		}
		console.log(translatedWord);
	}
}


const pathToDictionary = process.argv[2];
if (!pathToDictionary) errHandler(new Error('Path to dictionary is not defined'));
try {
	dictionary.openDictionary(pathToDictionary, (err, wordsDictionary) => {
		if (err) throw err;
		talkWithUser(wordsDictionary, pathToDictionary);
	});
} catch (e) {
	errHandler(e);
}

