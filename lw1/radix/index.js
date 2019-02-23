const alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function errHandler(err) {
	console.log(err.message);
	process.exit();
}

function getSymbolByNumber(num) {
	const symbol = alphabet[num];
	if (!symbol) throw new Error('The number to be transferred cannot be more than 35 and less than 0');
	return symbol
}

function getNumberBySymbol(symbol,) {
	const num = alphabet.indexOf(symbol);
	if (num === -1) throw new Error('Letter is not found');
	return Number(num)
}

function stringToInt(str, radix) {
	const isNegativeNum = str.indexOf('-') === -1 ? false : true;
	str = isNegativeNum ? str.replace('-', '') : str;
	const symbolsArr = str.split('');
	var i = 1;
	const result = symbolsArr.reduceRight((sum, symbol) => {
		const num = getNumberBySymbol(symbol, err => {
			if (err) throw err
		});
		var tempResult = num * i + sum;
		if (!Number.isSafeInteger(tempResult)) {
			throw new Error('This number is not safe');
		}
		i = i * radix;
		return tempResult;
	}, 0);
	return Number(isNegativeNum ? '-' + result : result)
}

function intToString(num, radix) {
	const isNegativeNum = num < 0 ? true : false;
	num = isNegativeNum ? num * -1 : num;
	var str = '';
	while (num >= radix) {
		str += getSymbolByNumber(num % radix, err => {
			if (err) throw err
		});
		num = Math.floor(num / radix);
	}
	str += getSymbolByNumber(num, err => {
		if (err) throw err
	});
	return (isNegativeNum ? '-' : '') + str.split('').reverse().join('')
}

if (process.argv.length !== 5) {
	const errMsg = 'Invalid argument count\nUsage: ./radix <source notation> <destination notation> <value>';
	errHandler(new Error(errMsg));
}

const sourceRadix = Number(process.argv[2]);
const destinationRadix = Number(process.argv[3]);
const value = process.argv[4];
let resultValue;

try {
	const intermediateValue = stringToInt(value, sourceRadix, err => {
		if (err) errHandler(err)
	});

	resultValue = intToString(intermediateValue, destinationRadix, err => {
		if (err) errHandler(err)
	});
} catch (e) {
	errHandler(e);
}

console.log(resultValue);
