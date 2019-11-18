"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Protocol_1 = __importDefault(require("../data_types/Protocol"));
const ParsingError_1 = __importDefault(require("./ParsingError"));
class HttpUrl {
    constructor(url) {
        this.url = '';
        this.domain = '';
        this.document = "/";
        this.protocol = Protocol_1.default.HTTP;
        this.port = 80;
        const parsedUrl = url.match(/^(.{4,5}):\/\//ui);
        if (parsedUrl == null) {
            throw new ParsingError_1.default("Url parsing error");
        }
        const protocol = parsedUrl[1];
    }
}
exports.default = HttpUrl;
