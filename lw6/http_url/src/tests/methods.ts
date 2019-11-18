import getProtocolFromString from "../methods/validateProtocol";
import ValidateError from "../classes/ValidateError";
import Protocol from "../data_types/Protocol";
import getPortByProtocol from "../methods/getPortByProtocol";

const assert = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;

describe('Methods', () => {
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
});
