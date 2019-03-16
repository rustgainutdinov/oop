const htmlToSymbolDictionary = {
	'&amp;': '&',
	'&quot;': '“',
	'&apos;': '‘',
	'&lt;': '<',
	'&gt;': '>',
};

function htmlDecode(htmlStr) {
	for (let symbol in htmlToSymbolDictionary) {
		htmlStr = htmlStr.replace(new RegExp(symbol, 'g'), htmlToSymbolDictionary[symbol]);
	}
	return htmlStr
}

module.exports = {
	htmlDecode
};
