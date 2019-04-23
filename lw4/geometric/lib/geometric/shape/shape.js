"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("../color");
var Shape = /** @class */ (function () {
    function Shape(outLineColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        this.outLineColor = color_1.getColorNumberFromString(outLineColorStr);
    }
    Shape.prototype.toString = function () {
        return "Area: " + this.getArea() + ", Perimeter: " + this.getPerimeter() + ", outline color: " + this.getOutlineColor() + "\n\t\t" + this.getDetailedDescription();
    };
    Shape.prototype.getOutlineColor = function () {
        return this.outLineColor;
    };
    return Shape;
}());
exports.Shape = Shape;
