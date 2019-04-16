"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("../../../point");
var line_segment_1 = require("../../line_segment");
var error_1 = require("../../../error");
var color_1 = require("../../../color");
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3, outLineColorStr, fillColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (fillColorStr === void 0) { fillColorStr = '000000'; }
        if (point_1.checkPointsForEquality(vertex1, vertex2) ||
            point_1.checkPointsForEquality(vertex2, vertex3) ||
            point_1.checkPointsForEquality(vertex1, vertex3)) {
            throw new error_1.GeometricError('triangle points are the same');
        }
        this.outLineColor = color_1.getColorNumberFromString(outLineColorStr);
        this.fillColor = color_1.getColorNumberFromString(fillColorStr);
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.getPerimeter = function () {
        var side1 = line_segment_1.getLengthBetweenPoints(this.vertex1, this.vertex2);
        var side2 = line_segment_1.getLengthBetweenPoints(this.vertex2, this.vertex3);
        var side3 = line_segment_1.getLengthBetweenPoints(this.vertex1, this.vertex3);
        return side1 + side2 + side3;
    };
    Triangle.prototype.getArea = function () {
        var side1 = line_segment_1.getLengthBetweenPoints(this.vertex1, this.vertex2);
        var side2 = line_segment_1.getLengthBetweenPoints(this.vertex2, this.vertex3);
        var side3 = line_segment_1.getLengthBetweenPoints(this.vertex1, this.vertex3);
        var semiPerimeter = (side1 + side2 + side3) / 2;
        return Math.pow(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3), 0.5);
    };
    Triangle.prototype.toString = function () {
        return "Vertex 1: (" + this.getVertex1().x + ", " + this.getVertex1().y + "),\n\t\tVertex 2: (" + this.getVertex2().x + ", " + this.getVertex2().y + "),\n\t\tVertex 3: (" + this.getVertex3().x + ", " + this.getVertex3().y + ")";
    };
    Triangle.prototype.getOutlineColor = function () {
        return this.outLineColor;
    };
    Triangle.prototype.getFillColor = function () {
        return this.fillColor;
    };
    Triangle.prototype.getVertex1 = function () {
        return this.vertex1;
    };
    Triangle.prototype.getVertex2 = function () {
        return this.vertex2;
    };
    Triangle.prototype.getVertex3 = function () {
        return this.vertex3;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
