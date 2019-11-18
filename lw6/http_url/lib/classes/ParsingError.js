"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParsingError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.default = ParsingError;
