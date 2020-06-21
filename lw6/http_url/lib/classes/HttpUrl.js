"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParsingError_1 = __importDefault(require("./ParsingError"));
const getProtocolFromString_1 = __importDefault(require("../methods/getProtocolFromString"));
const getPortByProtocol_1 = __importDefault(require("../methods/getPortByProtocol"));
const getStringFromProtocol_1 = __importDefault(require("../methods/getStringFromProtocol"));
class HttpUrl {
    constructor(protocol, domain, port, document) {
        this.protocol = getProtocolFromString_1.default(protocol);
        this.domain = domain;
        if (!port) {
            this.port = getPortByProtocol_1.default(this.protocol);
        }
        else {
            this.port = port;
        }
        if (document && document.slice(0, 1) !== "/") {
            document = "/" + document;
        }
        this.document = document;
    }
    static createByUrl(url) {
        const parsedUrl = url.match(/^(.{4,5}):\/\/(([a-z0-9-]{1,63}\.?)+(\.[a-z]{2,})?)(:(\d+))?(\/.*)?$/ui);
        if (parsedUrl == null) {
            throw new ParsingError_1.default("Url parsing error");
        }
        const protocol = parsedUrl[1];
        const domain = parsedUrl[2];
        const port = parseInt(parsedUrl[6]);
        const document = parsedUrl[7];
        if (!(protocol && domain)) {
            throw new ParsingError_1.default("Url parsing error");
        }
        return new HttpUrl(protocol, domain, port, document);
    }
    getProtocol() {
        return this.protocol;
    }
    getDomain() {
        return this.domain;
    }
    getPort() {
        return this.port;
    }
    getDocument() {
        return this.document;
    }
    getUrl() {
        let url = getStringFromProtocol_1.default(this.getProtocol()) + "://" + this.getDomain();
        if (getPortByProtocol_1.default(this.getProtocol()) !== this.getPort()) {
            url += ":" + this.getPort();
        }
        return url + (this.getDocument() ? this.getDocument() : "");
    }
}
exports.default = HttpUrl;
