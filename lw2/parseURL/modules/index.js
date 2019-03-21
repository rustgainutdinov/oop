function parseUrl(url, params) {
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

	const parsedUrl = url.match(/(\w{3,6}):\/\/(.+?(\..+?)+)(:(\d+))?(\/.+)?\b/i);
	if (!parsedUrl) return false;
	const protocolStr = parsedUrl[1];
	if (!protocol[protocolStr]) return false;
	params.protocol = protocolStr;
	params.port = Number(parsedUrl[5]) || protocol[protocolStr].defaultPort;
	const hostStr = parsedUrl[2];
	if (!hostStr) return false;
	params.host = hostStr;
	params.doc = parsedUrl[6];
	return true;
}

module.exports = {
	parseUrl
};
