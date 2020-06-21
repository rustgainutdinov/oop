"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const HttpUrl_1 = __importDefault(require("./HttpUrl"));
const getStringFromProtocol_1 = __importDefault(require("../methods/getStringFromProtocol"));
const ValidateError_1 = __importDefault(require("./ValidateError"));
const ParsingError_1 = __importDefault(require("./ParsingError"));
class UserInteraction {
    constructor() {
        this.isEnd = false;
    }
    run() {
        while (true) {
            const url = this.askUser();
            if (this.isEnd) {
                return;
            }
            let httpUrl;
            try {
                httpUrl = HttpUrl_1.default.createByUrl(url);
            }
            catch (e) {
                if (e instanceof ValidateError_1.default) {
                    console.log("Ошибка валидации: ", e.message);
                }
                else if (e instanceof ParsingError_1.default) {
                    console.log("Ошибка парсинга: ", e.message);
                }
                continue;
            }
            console.log(`Protocol: ${getStringFromProtocol_1.default(httpUrl.getProtocol())}`);
            console.log(`Domain: ${httpUrl.getDomain()}`);
            console.log(`Port: ${httpUrl.getPort()}`);
            console.log(`Document: ${httpUrl.getDocument()}`);
        }
    }
    askUser() {
        const url = readline_sync_1.default.question("url: ");
        if (url === "") {
            this.isEnd = true;
        }
        return url;
    }
}
exports.default = UserInteraction;
