const read = require('read');
const dictionary = require('./modules/dictionary');

function errHandler(err) {
	console.log(err.message);
}

function readFromCL(cb) {
	if (!cb) return;
	read({prompt: 'Введите слово на английском: '}, (err, word) => {
		if (err) throw err;
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

const pathToDictionary = process.argv[2];
if (!pathToDictionary) errHandler(new Error('Path to dictionary is not defined'));
let wereChangesFlag = false;
try {
	dictionary.openDictionary(pathToDictionary, err => {
		if (err) throw err;
		readFromCL(readFromCL);
	});
} catch (e) {
	errHandler(e);
}

