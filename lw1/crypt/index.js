const fs = require('fs');

function errHandler(err) {
	console.log(err.message);
	process.exit(1);
}

function decToBin(charCode) {
	let binChar = '';
	for (let i = 0; i < 8; i++) {
		binChar = (charCode % 2) + binChar;
		charCode = Math.floor(charCode / 2);
	}
	return binChar;
}

function cryptChar(charCode, key) {
	charCode = parseInt(charCode, 16);
	charCode = charCode ^ key;
	const bin = decToBin(charCode);
	const cryptChar = bin[5] + bin[6] + bin[0] + bin[1] + bin[2] + bin[7] + bin[3] + bin[4];
	return parseInt(cryptChar, 2).toString(16)
}

function decryptChar(charCode, key) {
	charCode = parseInt(charCode, 16);
	const bin = decToBin(charCode);
	let decryptCharCode = bin[2] + bin[3] + bin[4] + bin[6] + bin[7] + bin[0] + bin[1] + bin[5];
	decryptCharCode = parseInt(decryptCharCode, 2);
	const deCryptChar = decryptCharCode ^ key;
	return deCryptChar.toString(16)
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
		} else throw new Error('Action type is not defined');

		fs.open(inFilePath, 'r', function (status, fd) {
			let buffer = Buffer.alloc(1);
			let i = 0;
			let resultChar;
			while (fs.readSync(fd, buffer, 0, 1, i)) {
				resultChar = handler(buffer.toString('hex'), key);
				fs.appendFileSync(outFilePath, Buffer.from(resultChar.length === 1 ? '0' + resultChar : resultChar, 'hex'));
				i++;
			}
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
