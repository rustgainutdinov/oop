"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParsingError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.default = ParsingError;
