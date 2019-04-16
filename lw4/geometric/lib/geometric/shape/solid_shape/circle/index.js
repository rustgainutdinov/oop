"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = require("../../../error");
var color_1 = require("../../../color");
var Circle = /** @class */ (function () {
    function Circle(center, radius, outLineColorStr, fillColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (fillColorStr === void 0) { fillColorStr = '000000'; }
        if (radius <= 0)
            throw new error_1.GeometricError('radius is lower than 0 or equal to 0');
        this.center = center;
        this.radius = radius;
        this.outLineColor = color_1.getColorNumberFromString(outLineColorStr);
        this.fillColor = color_1.getColorNumberFromString(fillColorStr);
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return Math.PI * this.radius * 2;
    };
    Circle.prototype.getOutlineColor = function () {
        return this.outLineColor;
    };
    Circle.prototype.getFillColor = function () {
        return this.fillColor;
    };
    Circle.prototype.toString = function () {
        return "Center: (" + this.getCenter().x + ", " + this.getCenter().y + "), radius: " + this.getRadius();
    };
    Circle.prototype.getCenter = function () {
        return this.center;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
