const parseUrl = require('../modules').parseUrl;

describe('Parse Url', () => {
	const testsData = [
		{
			url: 'https://habr.com/ru/post/133037/',
			result: {
				protocol: 'https',
				port: 443,
				host: 'habr.com',
				doc: '/ru/post/133037'
			}
		},
		{
			url: 'https://ru.stackoverflow.com:9991/questions/',
			result: {
				protocol: 'https',
				port: 9991,
				host: 'ru.stackoverflow.com',
				doc: '/questions'
			}
		},
		{
			url: 'https://translate.google.com',
			result: {
				protocol: 'https',
				port: 443,
				host: 'translate.google.com',
				doc: undefined
			}
		},
		{
			url: 'https://translat',
			result: false
		},
		{
			url: 'habr.com',
			result: false
		}
	];

	for (let test of testsData)
		it(`should ${test.result ? 'correctly' : 'not'} parse ${test.url}`, () => {
			let urlParams = {};
			let result = parseUrl(test.url, urlParams);

			if (test.result === false)
				if (result !== test.result)
					throw new Error(`Expected ${test.result}, but got ${test}`);
				else
					return;


			for (let param in test.result)
				if (test.result[param] !== urlParams[param])
					throw new Error(`Expected ${test.result[param]}, but got ${urlParams[param]}`);

		})
});
