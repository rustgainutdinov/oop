const parseUrl = require('./modules').parseUrl;

const url = process.argv[2];

if (!url) throw new Error('Enter url');
// const url = 'http://www.mysite.com:8080/docs/document1.html?page=30&lang=en#title1';
const urlParams = {
	protocol: null,
	port: null,
	host: null,
	doc: null,
};

if (parseUrl(url, urlParams))
	console.log(urlParams);
