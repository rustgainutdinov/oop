import HttpUrl from "../classes/HttpUrl";
import ValidateError from "../classes/ValidateError";
import ParsingError from "../classes/ParsingError";
import Protocol from "../data_types/Protocol";
import getProtocolFromString from "../methods/getProtocolFromString";
import getPortByProtocol from "../methods/getPortByProtocol";
import getStringByProtocol from "../methods/getStringFromProtocol";

const assert = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;

describe('HttpUrl', () => {
	describe('constructor()', () => {
		it('Should throws Exception if port is incorrect', () => {
			try {
				new HttpUrl("http2", "ispring.ru");
				assert(false);
			} catch (e) {
				assert(e instanceof ValidateError);
			}
			try {
				new HttpUrl("http:", "ispring.ru");
				assert(false);
			} catch (e) {
				assert(e instanceof ValidateError);
			}
			try {
				new HttpUrl("htpp", "ispring.ru");
				assert(false);
			} catch (e) {
				assert(e instanceof ValidateError);
			}
		});
		it('Should add "/" before document', () => {
			assert(new HttpUrl("http", "ispring.ru", undefined, "document").getDocument() === "/document");
		});
		it('Should substitute Protocol type element if protocol is equals http/https', () => {
			assert(new HttpUrl("http", "ispring.ru").getPort() === 80);
			assert(new HttpUrl("https", "ispring.ru").getPort() === 443);
		});
	});
	describe('createByUrl()', () => {
		it('Should throws Exception if url is incorrect', () => {
			try {
				HttpUrl.createByUrl("https://ispring.ru:");
				assert(false);
			} catch (e) {
				assert(e instanceof ParsingError);
			}
			try {
				HttpUrl.createByUrl("http2://ispring.ru");
				assert(false);
			} catch (e) {
				assert(e instanceof ValidateError);
			}
			try {
				HttpUrl.createByUrl("ispring.ru");
				assert(false);
			} catch (e) {
				assert(e instanceof ParsingError);
			}
			try {
				HttpUrl.createByUrl("http://ispring.ru:s");
				assert(false);
			} catch (e) {
				assert(e instanceof ParsingError);
			}
			try {
				HttpUrl.createByUrl("://ispring.ru");
				assert(false);
			} catch (e) {
				assert(e instanceof ParsingError);
			}
		});
		it('Should correctly parse protocol', () => {
			assert(HttpUrl.createByUrl("http://ispring.ru").getProtocol() === Protocol.HTTP);
			assert(HttpUrl.createByUrl("https://ispring.ru").getProtocol() === Protocol.HTTPS);
		});
		it('Should correctly parse domain', () => {
			assert(HttpUrl.createByUrl("http://learn.ispring.ru").getDomain() === "learn.ispring.ru");
			assert(HttpUrl.createByUrl("https://ispring.ru").getDomain() === "ispring.ru");
		});
		it('Should correctly parse port', () => {
			assert(HttpUrl.createByUrl("http://learn.ispring.ru:4000").getPort() === 4000);
			assert(HttpUrl.createByUrl("https://ispring.ru:80").getPort() === 80);
		});
		it('Should substitute Protocol type element if protocol is equals http/https', () => {
			assert(HttpUrl.createByUrl("http://ispring.ru").getPort() === 80);
			assert(HttpUrl.createByUrl("https://ispring.ru").getPort() === 443);
		});
		it('Should correctly parse document', () => {
			assert(HttpUrl.createByUrl("http://ispring.ru/").getDocument() === "/");
			assert(HttpUrl.createByUrl("https://ispring.ru/document/doc").getDocument() === "/document/doc");
		});
		it('Should correctly compile url', () => {
			assert(HttpUrl.createByUrl("http://ispring.ru").getUrl() === "http://ispring.ru");
			assert(HttpUrl.createByUrl("http://ispring.ru:80/document").getUrl() === "http://ispring.ru/document");
			assert(HttpUrl.createByUrl("https://localhost/").getUrl() === "https://localhost/");
			assert(HttpUrl.createByUrl("https://127.0.0.1:443").getUrl() === "https://127.0.0.1");
			assert(HttpUrl.createByUrl("https://127.0.0.1:433/").getUrl() === "https://127.0.0.1:433/");
		});
	});
	describe('getProtocolFromString()', () => {
		it('Should throws Exception if protocol is not equals http/https', () => {
			try {
				getProtocolFromString("http2");
			} catch (e) {
				assert(e instanceof ValidateError);
			}
			try {
				getProtocolFromString("https:");
			} catch (e) {
				assert(e instanceof ValidateError);
			}
		});
		
		it('Should return Protocol type element if protocol is equals http/https', () => {
			assert(getProtocolFromString("http") === Protocol.HTTP);
			assert(getProtocolFromString("https") === Protocol.HTTPS);
		});
	});
	
	describe('getPortByProtocol()', () => {
		it('Should return 80 if HTTP and 443 if HTTPS port', () => {
			assert(getPortByProtocol(Protocol.HTTP) === 80);
			assert(getPortByProtocol(Protocol.HTTPS) === 443);
		});
	});
	
	describe('getStringByProtocol()', () => {
		it('Should return "http" if Protocol.HTTP and "https" if Protocol.HTTPS', () => {
			assert(getStringByProtocol(Protocol.HTTP) === "http");
			assert(getStringByProtocol(Protocol.HTTPS) === "https");
		});
	});
});
