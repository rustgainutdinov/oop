"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var geomenricError_1 = require("./geomenricError");
var ColorError = /** @class */ (function (_super) {
    __extends(ColorError, _super);
    function ColorError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'ColorError';
        return _this;
    }
    return ColorError;
}(geomenricError_1.GeometricError));
exports.ColorError = ColorError;
