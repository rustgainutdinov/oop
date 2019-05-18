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
var shape_1 = require("./shape");
var point_1 = require("./point");
var geomenricError_1 = require("../error/geomenricError");
var LineSegment = /** @class */ (function (_super) {
    __extends(LineSegment, _super);
    function LineSegment(startPoint, endPoint, outLineColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        var _this = this;
        if (startPoint.x === endPoint.x && startPoint.y === endPoint.y) {
            throw new geomenricError_1.GeometricError('Creation line with the same points is impossible');
        }
        _this = _super.call(this, outLineColorStr) || this;
        _this.startPoint = startPoint;
        _this.endPoint = endPoint;
        return _this;
    }
    LineSegment.prototype.getArea = function () {
        return 0;
    };
    LineSegment.prototype.getPerimeter = function () {
        return getLengthBetweenPoints(this.startPoint, this.endPoint);
    };
    LineSegment.prototype.getDetailedDescription = function () {
        return "Start point: (" + this.getStartPoint().x + ", " + this.getStartPoint().y + "),\n\t\tend point: (" + this.getEndPoint().x + ", " + this.getEndPoint().y + ")";
    };
    LineSegment.prototype.getStartPoint = function () {
        return this.startPoint;
    };
    LineSegment.prototype.getEndPoint = function () {
        return this.endPoint;
    };
    LineSegment.prototype.draw = function (canvas) {
        canvas.drawLine(point_1.recalculateCoordinateForDrawing(this.getStartPoint(), canvas.leftTopPoint), point_1.recalculateCoordinateForDrawing(this.getEndPoint(), canvas.leftTopPoint), this.getOutlineColor());
    };
    return LineSegment;
}(shape_1.Shape));
exports.LineSegment = LineSegment;
function getLengthBetweenPoints(startPoint, endPoint) {
    var lengthX = startPoint.x - endPoint.x;
    var lengthY = startPoint.y - endPoint.y;
    return Math.pow(lengthX * lengthX + lengthY * lengthY, 0.5);
}
exports.getLengthBetweenPoints = getLengthBetweenPoints;
