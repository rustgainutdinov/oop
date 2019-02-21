const alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function errHandler(err) {
  console.log(err.message);
  process.exit();
}

function getSymbolByNumber(num, cb) {
  const symbol = alphabet[num];
  if (!symbol) cb(new Error('The number to be transferred cannot be more than 35 and less than 0'));
  return symbol
}

function getNumberBySymbol(symbol, cb) {
  const num = alphabet.indexOf(symbol);
  if (num === -1) cb(new Error('Letter is not found'));
  return Number(num)
}

function StringToInt(str, radix, cb) {
  const symbolsArr = str.split('');
  var i = 0;
  var result = symbolsArr.reduceRight((sum, symbol) => {
    const num = getNumberBySymbol(symbol, err => {
      if (err) cb(err)
    });
    if (!Number.isSafeInteger((num * Math.pow(radix, i)) + sum)) {
      cb(new Error('This number is not safe'));
    }
    return (num * Math.pow(radix, i++)) + sum;
  }, 0);
  return result
}

function IntToString(num, radix, cb) {
  var str = '';
  while (num >= radix) {
    str += getSymbolByNumber(Math.floor(num % radix), err => {
      if (err) cb(err)
    });
    num = Math.floor(num / radix);
  }
  str += getSymbolByNumber(num, err => {
    if (err) cb(err)
  });
  return str.split('').reverse().join('')
}

if (process.argv.length !== 5) {
  const errMsg = 'Invalid argument count\nUsage: ./radix <source notation> <destination notation> <value>';
  errHandler(new Error(errMsg));
}

const isNegativeNum = process.argv[4].indexOf('_') === -1 ? false : true;
const sourceRadix = Number(process.argv[2]);
const destinationRadix = Number(process.argv[3]);
const value = isNegativeNum ? process.argv[4].substring(1) : process.argv[4];

const intermediateValue = StringToInt(value, sourceRadix, err => {
  if (err) errHandler(err)
});

const resultValue = (isNegativeNum ? '-' : '') + IntToString(intermediateValue, destinationRadix, err => {
  if (err) errHandler(err)
});

console.log(resultValue);
