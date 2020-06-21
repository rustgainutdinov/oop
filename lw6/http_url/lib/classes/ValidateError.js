"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.default = ValidateError;
