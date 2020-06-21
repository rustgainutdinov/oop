"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpUrl_1 = __importDefault(require("../classes/HttpUrl"));
const ValidateError_1 = __importDefault(require("../classes/ValidateError"));
const ParsingError_1 = __importDefault(require("../classes/ParsingError"));
const Protocol_1 = __importDefault(require("../data_types/Protocol"));
const getProtocolFromString_1 = __importDefault(require("../methods/getProtocolFromString"));
const getPortByProtocol_1 = __importDefault(require("../methods/getPortByProtocol"));
const getStringFromProtocol_1 = __importDefault(require("../methods/getStringFromProtocol"));
const assert = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;
describe('HttpUrl', () => {
    describe('constructor()', () => {
        it('Should throws Exception if port is incorrect', () => {
            try {
                new HttpUrl_1.default("http2", "ispring.ru");
                assert(false);
            }
            catch (e) {
                assert(e instanceof ValidateError_1.default);
            }
            try {
                new HttpUrl_1.default("http:", "ispring.ru");
                assert(false);
            }
            catch (e) {
                assert(e instanceof ValidateError_1.default);
            }
            try {
                new HttpUrl_1.default("htpp", "ispring.ru");
                assert(false);
            }
            catch (e) {
                assert(e instanceof ValidateError_1.default);
            }
        });
        it('Should add "/" before document', () => {
            assert(new HttpUrl_1.default("http", "ispring.ru", undefined, "document").getDocument() === "/document");
        });
        it('Should substitute Protocol type element if protocol is equals http/https', () => {
            assert(new HttpUrl_1.default("http", "ispring.ru").getPort() === 80);
            assert(new HttpUrl_1.default("https", "ispring.ru").getPort() === 443);
        });
    });
    describe('createByUrl()', () => {
        it('Should throws Exception if url is incorrect', () => {
            try {
                HttpUrl_1.default.createByUrl("https://ispring.ru:");
                assert(false);
            }
            catch (e) {
                assert(e instanceof ParsingError_1.default);
            }
            try {
                HttpUrl_1.default.createByUrl("http2://ispring.ru");
                assert(false);
            }
            catch (e) {
                assert(e instanceof ValidateError_1.default);
            }
            try {
                HttpUrl_1.default.createByUrl("ispring.ru");
                assert(false);
            }
            catch (e) {
                assert(e instanceof ParsingError_1.default);
            }
            try {
                HttpUrl_1.default.createByUrl("http://ispring.ru:s");
                assert(false);
            }
            catch (e) {
                assert(e instanceof ParsingError_1.default);
            }
            try {
                HttpUrl_1.default.createByUrl("://ispring.ru");
                assert(false);
            }
            catch (e) {
                assert(e instanceof ParsingError_1.default);
            }
        });
        it('Should correctly parse protocol', () => {
            assert(HttpUrl_1.default.createByUrl("http://ispring.ru").getProtocol() === Protocol_1.default.HTTP);
            assert(HttpUrl_1.default.createByUrl("https://ispring.ru").getProtocol() === Protocol_1.default.HTTPS);
        });
        it('Should correctly parse domain', () => {
            assert(HttpUrl_1.default.createByUrl("http://learn.ispring.ru").getDomain() === "learn.ispring.ru");
            assert(HttpUrl_1.default.createByUrl("https://ispring.ru").getDomain() === "ispring.ru");
        });
        it('Should correctly parse port', () => {
            assert(HttpUrl_1.default.createByUrl("http://learn.ispring.ru:4000").getPort() === 4000);
            assert(HttpUrl_1.default.createByUrl("https://ispring.ru:80").getPort() === 80);
        });
        it('Should substitute Protocol type element if protocol is equals http/https', () => {
            assert(HttpUrl_1.default.createByUrl("http://ispring.ru").getPort() === 80);
            assert(HttpUrl_1.default.createByUrl("https://ispring.ru").getPort() === 443);
        });
        it('Should correctly parse document', () => {
            assert(HttpUrl_1.default.createByUrl("http://ispring.ru/").getDocument() === "/");
            assert(HttpUrl_1.default.createByUrl("https://ispring.ru/document/doc").getDocument() === "/document/doc");
        });
        it('Should correctly compile url', () => {
            assert(HttpUrl_1.default.createByUrl("http://ispring.ru").getUrl() === "http://ispring.ru");
            assert(HttpUrl_1.default.createByUrl("http://ispring.ru:80/document").getUrl() === "http://ispring.ru/document");
            assert(HttpUrl_1.default.createByUrl("https://localhost/").getUrl() === "https://localhost/");
            assert(HttpUrl_1.default.createByUrl("https://127.0.0.1:443/").getUrl() === "https://127.0.0.1/");
            assert(HttpUrl_1.default.createByUrl("https://127.0.0.1:433/").getUrl() === "https://127.0.0.1:433/");
        });
    });
    describe('getProtocolFromString()', () => {
        it('Should throws Exception if protocol is not equals http/https', () => {
            try {
                getProtocolFromString_1.default("http2");
            }
            catch (e) {
                assert(e instanceof ValidateError_1.default);
            }
            try {
                getProtocolFromString_1.default("https:");
            }
            catch (e) {
                assert(e instanceof ValidateError_1.default);
            }
        });
        it('Should return Protocol type element if protocol is equals http/https', () => {
            assert(getProtocolFromString_1.default("http") === Protocol_1.default.HTTP);
            assert(getProtocolFromString_1.default("https") === Protocol_1.default.HTTPS);
        });
    });
    describe('getPortByProtocol()', () => {
        it('Should return 80 if HTTP and 443 if HTTPS port', () => {
            assert(getPortByProtocol_1.default(Protocol_1.default.HTTP) === 80);
            assert(getPortByProtocol_1.default(Protocol_1.default.HTTPS) === 443);
        });
    });
    describe('getStringByProtocol()', () => {
        it('Should return "http" if Protocol.HTTP and "https" if Protocol.HTTPS', () => {
            assert(getStringFromProtocol_1.default(Protocol_1.default.HTTP) === "http");
            assert(getStringFromProtocol_1.default(Protocol_1.default.HTTPS) === "https");
        });
    });
});
