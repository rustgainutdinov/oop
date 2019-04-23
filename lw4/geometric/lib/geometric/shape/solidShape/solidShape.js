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
var Shape_1 = require("../Shape");
var color_1 = require("../../color");
var SolidShape = /** @class */ (function (_super) {
    __extends(SolidShape, _super);
    function SolidShape(outLineColorStr, fillColor) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (fillColor === void 0) { fillColor = '000000'; }
        var _this = _super.call(this, outLineColorStr) || this;
        _this.fillColor = color_1.getColorNumberFromString(fillColor);
        return _this;
    }
    SolidShape.prototype.toString = function () {
        return "Area: " + this.getArea() + ", Perimeter: " + this.getPerimeter() + ", outline color: " + this.getOutlineColor() + ", fill color: " + this.getFillColor() + "\n\t\t" + this.getDetailedDescription();
    };
    SolidShape.prototype.getFillColor = function () {
        return this.fillColor;
    };
    return SolidShape;
}(Shape_1.Shape));
exports.SolidShape = SolidShape;
