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
var solidShape_1 = require("./solidShape");
var geomenricError_1 = require("../../error/geomenricError");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(leftTop, rightBottom, outLineColorStr, fillColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (fillColorStr === void 0) { fillColorStr = '000000'; }
        var _this = _super.call(this, outLineColorStr, fillColorStr) || this;
        if ((rightBottom.x - leftTop.x) <= 0 || (leftTop.y - rightBottom.y) <= 0) {
            throw new geomenricError_1.GeometricError('rectangle cannot exist');
        }
        _this.leftTop = leftTop;
        _this.rightBottom = rightBottom;
        return _this;
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
    Rectangle.prototype.getDetailedDescription = function () {
        return "Left top point: (" + this.getLeftTop().x + ",  " + this.getLeftTop().y + "),\n\t\tright bottom point: (" + this.getRightBottom().x + ",  " + this.getRightBottom().y + "),\n\t\twidth: " + this.getWidth() + ", height: " + this.getHeight();
    };
    return Rectangle;
}(solidShape_1.SolidShape));
exports.Rectangle = Rectangle;
