const generatePrimeNumbersSet = require('./modules').generatePrimeNumbersSet;

const upperBound = Number(process.argv[2]);

if (!upperBound) throw new Error('Enter upper bound');
if (upperBound > 100000000 || upperBound < 0) throw new Error('Upper bound must be in range of 0 to 100000000');
console.log(generatePrimeNumbersSet(upperBound).size);

