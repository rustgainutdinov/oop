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
var lineSegment_1 = require("../lineSegment");
var geomenricError_1 = require("../../error/geomenricError");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(vertex1, vertex2, vertex3, outLineColorStr, fillColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (fillColorStr === void 0) { fillColorStr = '000000'; }
        var _this = _super.call(this, outLineColorStr, fillColorStr) || this;
        if (point_1.checkPointsForEquality(vertex1, vertex2) ||
            point_1.checkPointsForEquality(vertex2, vertex3) ||
            point_1.checkPointsForEquality(vertex1, vertex3)) {
            throw new geomenricError_1.GeometricError('triangle points are the same');
        }
        _this.vertex1 = vertex1;
        _this.vertex2 = vertex2;
        _this.vertex3 = vertex3;
        return _this;
    }
    Triangle.prototype.getPerimeter = function () {
        var side1 = lineSegment_1.getLengthBetweenPoints(this.vertex1, this.vertex2);
        var side2 = lineSegment_1.getLengthBetweenPoints(this.vertex2, this.vertex3);
        var side3 = lineSegment_1.getLengthBetweenPoints(this.vertex1, this.vertex3);
        return side1 + side2 + side3;
    };
    Triangle.prototype.getArea = function () {
        var side1 = lineSegment_1.getLengthBetweenPoints(this.vertex1, this.vertex2);
        var side2 = lineSegment_1.getLengthBetweenPoints(this.vertex2, this.vertex3);
        var side3 = lineSegment_1.getLengthBetweenPoints(this.vertex1, this.vertex3);
        var semiPerimeter = (side1 + side2 + side3) / 2;
        return Math.pow(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3), 0.5);
    };
    Triangle.prototype.getDetailedDescription = function () {
        return "Vertex 1: (" + this.getVertex1().x + ", " + this.getVertex1().y + "),\n\t\tVertex 2: (" + this.getVertex2().x + ", " + this.getVertex2().y + "),\n\t\tVertex 3: (" + this.getVertex3().x + ", " + this.getVertex3().y + ")";
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
    Triangle.prototype.draw = function (canvas) {
        var vertex1 = point_1.recalculateCoordinateForDrawing(this.getVertex1(), canvas.leftTopPoint);
        var vertex2 = point_1.recalculateCoordinateForDrawing(this.getVertex2(), canvas.leftTopPoint);
        var vertex3 = point_1.recalculateCoordinateForDrawing(this.getVertex3(), canvas.leftTopPoint);
        canvas.drawLine(vertex1, vertex2, this.getOutlineColor());
        canvas.drawLine(vertex2, vertex3, this.getOutlineColor());
        canvas.drawLine(vertex3, vertex1, this.getOutlineColor());
        canvas.fillPolygon([vertex1, vertex2, vertex3], this.getFillColor());
    };
    return Triangle;
}(solidShape_1.SolidShape));
exports.Triangle = Triangle;
