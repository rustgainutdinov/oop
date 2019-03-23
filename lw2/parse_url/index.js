const parseUrl = require('./modules').parseUrl;

const url = process.argv[2];

if (!url) throw new Error('Enter url');

const urlParams = parseUrl(url);

if (urlParams)
	console.log(urlParams);
