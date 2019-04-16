"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeometricError = /** @class */ (function () {
    function GeometricError(message) {
        this.message = message ? message : '';
        this.name = 'GeometricError';
        this.stack = (new Error(message)).stack;
    }
    return GeometricError;
}());
exports.GeometricError = GeometricError;
GeometricError.prototype = Object.create(Error.prototype);
GeometricError.prototype.constructor = GeometricError;
