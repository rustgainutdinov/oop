"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidateError_1 = __importDefault(require("../classes/ValidateError"));
const Protocol_1 = __importDefault(require("../data_types/Protocol"));
function getProtocolFromString(protocol) {
    const parsedProtocol = protocol.match(/^https?$/ui);
    if (!parsedProtocol) {
        throw new ValidateError_1.default("Protocol is incorrect");
    }
    if (parsedProtocol[0].length === 4) {
        return Protocol_1.default.HTTP;
    }
    return Protocol_1.default.HTTPS;
}
exports.default = getProtocolFromString;
