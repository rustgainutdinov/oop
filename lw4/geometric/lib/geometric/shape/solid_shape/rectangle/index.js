"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = require("../../../error");
var color_1 = require("../../../color");
var Rectangle = /** @class */ (function () {
    function Rectangle(leftTop, rightBottom, outLineColorStr, fillColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (fillColorStr === void 0) { fillColorStr = '000000'; }
        if ((rightBottom.x - leftTop.x) <= 0 || (leftTop.y - rightBottom.y) <= 0) {
            throw new error_1.GeometricError('rectangle cannot exist');
        }
        this.outLineColor = color_1.getColorNumberFromString(outLineColorStr);
        this.fillColor = color_1.getColorNumberFromString(fillColorStr);
        this.leftTop = leftTop;
        this.rightBottom = rightBottom;
    }
    Rectangle.prototype.getLeftTop = function () {
        return this.leftTop;
    };
    Rectangle.prototype.getRightBottom = function () {
        return this.rightBottom;
    };
    Rectangle.prototype.getWidth = function () {
        return this.rightBottom.x - this.leftTop.x;
    };
    Rectangle.prototype.getHeight = function () {
        return this.leftTop.y - this.rightBottom.y;
    };
    Rectangle.prototype.getArea = function () {
        return this.getWidth() * this.getHeight();
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.getWidth() + this.getHeight()) * 2;
    };
    Rectangle.prototype.getOutlineColor = function () {
        return this.outLineColor;
    };
    Rectangle.prototype.getFillColor = function () {
        return this.fillColor;
    };
    Rectangle.prototype.toString = function () {
        return "Left top point: (" + this.getLeftTop().x + ",  " + this.getLeftTop().y + "),\n\t\tright bottom point: (" + this.getRightBottom().x + ",  " + this.getRightBottom().y + "),\n\t\twidth: " + this.getWidth() + ", height: " + this.getHeight();
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
