const read = require('read');
const multipleElementsByMin = require('./modules').multipleElementsByMin;

read({prompt: 'Array: '}, (err, arr) => {
	if (err) throw err;
	arr = arr.split(' ');
	arr = arr.map(item => Number(item));
	const modifiedArr = multipleElementsByMin(arr);
	console.log('Modified Array: ' + modifiedArr.sort((a, b) => a - b).join(' '));
});
