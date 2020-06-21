"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Protocol_1 = __importDefault(require("../data_types/Protocol"));
function getPortByProtocol(protocol) {
    if (protocol === Protocol_1.default.HTTP) {
        return 80;
    }
    return 443;
}
exports.default = getPortByProtocol;
