"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("../../color");
var error_1 = require("../../error");
var LineSegment = /** @class */ (function () {
    function LineSegment(startPoint, endPoint, outLineColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (startPoint.x === endPoint.x && startPoint.y === endPoint.y) {
            throw new error_1.GeometricError('Creation line with the same points is impossible');
        }
        this.outLineColor = color_1.getColorNumberFromString(outLineColorStr);
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }
    LineSegment.prototype.getArea = function () {
        return 0;
    };
    LineSegment.prototype.getPerimeter = function () {
        return getLengthBetweenPoints(this.startPoint, this.endPoint);
    };
    LineSegment.prototype.toString = function () {
        return "Start point: (" + this.getStartPoint().x + ", " + this.getStartPoint().y + "),\n\t\tend point: (" + this.getEndPoint().x + ", " + this.getEndPoint().y + ")";
    };
    LineSegment.prototype.getOutlineColor = function () {
        return this.outLineColor;
    };
    LineSegment.prototype.getStartPoint = function () {
        return this.startPoint;
    };
    LineSegment.prototype.getEndPoint = function () {
        return this.endPoint;
    };
    return LineSegment;
}());
exports.LineSegment = LineSegment;
function getLengthBetweenPoints(startPoint, endPoint) {
    var lengthX = startPoint.x - endPoint.x;
    var lengthY = startPoint.y - endPoint.y;
    return Math.pow(lengthX * lengthX + lengthY * lengthY, 0.5);
}
exports.getLengthBetweenPoints = getLengthBetweenPoints;
