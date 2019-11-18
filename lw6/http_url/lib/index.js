"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpUrl_1 = __importDefault(require("./classes/HttpUrl"));
function main() {
    new HttpUrl_1.default("https://www.ispring.ru/company/reseller-program");
    new HttpUrl_1.default("http://www.ispring.ru/company/reseller-program");
}
main();
