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
var point_1 = require("../point");
var geomenricError_1 = require("../../error/geomenricError");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(center, radius, outLineColorStr, fillColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (fillColorStr === void 0) { fillColorStr = '000000'; }
        var _this = _super.call(this, outLineColorStr, fillColorStr) || this;
        if (radius <= 0)
            throw new geomenricError_1.GeometricError('radius is lower than 0 or equal to 0');
        _this.center = center;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return Math.PI * this.radius * 2;
    };
    Circle.prototype.getDetailedDescription = function () {
        return "Center: (" + this.getCenter().x + ", " + this.getCenter().y + "), radius: " + this.getRadius();
    };
    Circle.prototype.getCenter = function () {
        return this.center;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.draw = function (canvas) {
        canvas.drawCircle(point_1.recalculateCoordinateForDrawing(this.center, canvas.leftTopPoint), this.radius, this.getOutlineColor());
        canvas.fillCircle(point_1.recalculateCoordinateForDrawing(this.center, canvas.leftTopPoint), this.radius, this.getFillColor());
    };
    return Circle;
}(solidShape_1.SolidShape));
exports.Circle = Circle;
