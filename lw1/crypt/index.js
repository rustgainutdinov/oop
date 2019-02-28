const fs = require('fs');
const readLine = require('readline');

function errHandler(err) {
	console.log(err.message);
	process.exit(1);
}

function decToBin(charCode) {
	var binChar = '';
	for (var i = 0; i < 8; i++) {
		binChar = (charCode % 2) + binChar;
		charCode = Math.floor(charCode / 2);
	}
	return binChar;
}

function cryptChar(char, key) {
	var charCode = char.charCodeAt(0);
	if (charCode >= 128) throw new Error(char + ' is NOT an ASCII character');
	charCode = charCode ^ key;
	const bin = decToBin(charCode);
	const cryptChar = bin[5] + bin[6] + bin[0] + bin [1] + bin[2] + bin[7] + bin[3] + bin[4];
	return String.fromCharCode(parseInt(cryptChar, 2))
}

function decryptChar(char, key) {
	const charCode = char.charCodeAt(0);
	const bin = decToBin(charCode);
	var deCryptChar = bin[2] + bin[3] + bin[4] + bin[6] + bin[7] + bin[0] + bin[1] + bin[5];
	console.log(deCryptChar);
	deCryptChar = deCryptChar ^ 0;
	console.log(deCryptChar);

	return String.fromCharCode(parseInt(deCryptChar, 2))
}

function checkFilesForExistence(inFilePath, outFilePath, cb) {
	fs.access(inFilePath, fs.constants.F_OK, err => {
		if (err) throw err;
		fs.writeFile(outFilePath, '', err => {
			if (err) throw err;
			cb();
		});
	});
}

function cryptFile(inFilePath, outFilePath, key, action) {
	checkFilesForExistence(inFilePath, outFilePath, () => {
		let handler;
		if (action === 'crypt') {
			handler = cryptChar;
		} else if (action === 'decrypt') {
			handler = decryptChar;
		} else errHandler(new Error('Action type is not defined'));
		fs.createReadStream(inFilePath, {encoding: 'utf8'})
		.on('readable', function () {
			var chunk;
			while (chunk = this.read(1)) {
				fs.appendFileSync(outFilePath, handler(chunk, key));
			}
		})
		.on('end', function () {
		});
	});
}

if (process.argv.length !== 6) {
	const errMsg = 'Invalid argument count\nUsage: ./crypt <action type> <input file> <output file> <key>';
	errHandler(new Error(errMsg));
}

const action = process.argv[2];
const inFilePath = process.argv[3];
const outFilePath = process.argv[4];
const key = Number(process.argv[5]);

if (key < 0 || key > 255) {
	errHandler(new Error('key must be in 0..255'));
}

try {
	cryptFile(inFilePath, outFilePath, key, action);
} catch (e) {
	errHandler(e);
}

// console.log(binArrToString(["01100110", "01101111", "01101111"])); // "foo"
// console.log(stringToCharCodeArr("hello world"));
