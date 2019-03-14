const read = require('read');
const htmlDecode = require('./modules').htmlDecode;

read({prompt: 'Html string: '}, (err, str) => {
	if (err) throw err;
	console.log(htmlDecode(str));
});
