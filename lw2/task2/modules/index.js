const htmlToSymbolDictionary = {
	'&quot;': '“',
	'&apos;': '‘',
	'&lt;': '<',
	'&gt;': '>',
	'&amp;': '&'
};

function htmlDecode(htmlStr) {
	let symbol;
	for (symbol in htmlToSymbolDictionary) {
		htmlStr = htmlStr.replace(symbol, htmlToSymbolDictionary[symbol]);
	}
	return htmlStr
}

module.exports = {
	htmlDecode
};
