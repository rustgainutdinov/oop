const readLineSync = require('readline-sync');
const dictionary = require('./modules/dictionary');

function errHandler(err) {
	console.log(err.message);
}

function askWord() {
	return readLineSync.question('Введите слово: ')
}

function askWordTranslation(word) {
	return readLineSync.question(`Неизвестное слово “${word}”. Введите перевод или пустую строку для отказа. `)
}

function sayDictionaryModifiedState(word, translatedWord) {
	if (!translatedWord) console.log(`Слово “${word}” проигнорировано.`);
	else console.log(`Слово “${word}” сохранено в словаре как “${translatedWord}”.`);
}

function askAboutSavingChanges() {
	return readLineSync.question('В словарь были внесены изменения. Введите Y или y для сохранения перед выходом. ')
}

function sayAboutDictionarySaving(dictionarySaving) {
	console.log(`Изменения ${dictionarySaving ? '' : 'не '}сохранены. До свидания.`);
}


function talkWithUser(wordsDictionary, pathToDictionary) {
	let continueDialog = true;
	let wereChangesFlag = false;
	while (continueDialog) {
		const word = askWord();
		if (word === '...') {
			continueDialog = false;
			if (!wereChangesFlag) continue;
			const savingChangesFlag = askAboutSavingChanges().toLowerCase() === 'y';
			if (savingChangesFlag) dictionary.saveChanges(pathToDictionary, wordsDictionary);
			sayAboutDictionarySaving(savingChangesFlag);
			continue
		}
		let translatedWord = dictionary.translate(word, wordsDictionary);
		if (!translatedWord) {
			const translationOfWord = askWordTranslation(word);
			sayDictionaryModifiedState(word, translationOfWord);
			if (translationOfWord !== '') {
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

