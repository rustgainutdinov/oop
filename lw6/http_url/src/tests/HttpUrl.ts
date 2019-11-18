import HttpUrl from "../classes/HttpUrl";
import ParsingError from "../classes/ParsingError";
import ValidateError from "../classes/ValidateError";
import Protocol from "../data_types/Protocol";

const assert = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;

describe('HttpUrl', () => {
	describe('constructor()', () => {
		it('Should throws Exception if url is incorrect', () => {
			try {
				new HttpUrl("https://ispring.ru:");
			} catch (e) {
				assert(e instanceof ParsingError);
			}
			try {
				new HttpUrl("http2://ispring.ru");
			} catch (e) {
				assert(e instanceof ValidateError);
			}
			try {
				new HttpUrl("ispring.ru");
			} catch (e) {
				assert(e instanceof ParsingError);
			}
			try {
				new HttpUrl("http://ispring.ru:s");
			} catch (e) {
				assert(e instanceof ParsingError);
			}
			try {
				new HttpUrl("://ispring.ru");
			} catch (e) {
				assert(e instanceof ParsingError);
			}
			try {
				new HttpUrl("http://ispring.s");
			} catch (e) {
				assert(e instanceof ParsingError);
			}
		});
		it('Should correctly parse protocol', () => {
			assert(new HttpUrl("http://ispring.ru").getProtocol() === Protocol.HTTP);
			assert(new HttpUrl("https://ispring.ru").getProtocol() === Protocol.HTTPS);
		});
		it('Should correctly parse domain', () => {
			assert(new HttpUrl("http://learn.ispring.ru").getDomain() === "learn.ispring.ru");
			assert(new HttpUrl("https://ispring.ru").getDomain() === "ispring.ru");
		});
		it('Should correctly parse port', () => {
			assert(new HttpUrl("http://learn.ispring.ru:4000").getPort() === 4000);
			assert(new HttpUrl("https://ispring.ru:80").getPort() === 80);
		});
		it('Should substitute Protocol type element if protocol is equals http/https', () => {
			assert(new HttpUrl("http://ispring.ru").getPort() === 80);
			assert(new HttpUrl("https://ispring.ru").getPort() === 443);
		});
		it('Should correctly parse document', () => {
			assert(new HttpUrl("http://ispring.ru/").getDocument() === "/");
			assert(new HttpUrl("https://ispring.ru/document/doc").getDocument() === "/document/doc");
		});
		it('Should correctly parse url', () => {
			assert(new HttpUrl("http://ispring.ru/").getUrl() === "http://ispring.ru/");
			assert(new HttpUrl("https://ispring.ru:4040/document/doc").getUrl() === "https://ispring.ru:4040/document/doc");
		});
	});
});
