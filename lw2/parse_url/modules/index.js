const protocol = {
	'http': {
		defaultPort: 80
	},
	'https': {
		defaultPort: 443
	},
	'ftp': {
		defaultPort: 21
	}
};

function parseUrl(url) {
	let urlParams = {};
	const parsedUrl = url.match(/(\w{3,6}):\/\/(.+?(\..+?)+)(:(\d+))?(\/.+)?\b/i);
	if (!parsedUrl) return null;
	const protocolStr = parsedUrl[1];
	if (!protocol[protocolStr]) return null;
	urlParams.protocol = protocolStr;
	urlParams.port = Number(parsedUrl[5]) || protocol[protocolStr].defaultPort;
	const hostStr = parsedUrl[2];
	if (!hostStr) return null;
	urlParams.host = hostStr;
	urlParams.doc = parsedUrl[6];
	return urlParams;
}

module.exports = {
	parseUrl
};
