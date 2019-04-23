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
var index_1 = require("./index");
var point_1 = require("../../point");
var line_segment_1 = require("../line_segment");
var error_1 = require("../../error");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(vertex1, vertex2, vertex3, outLineColorStr, fillColorStr) {
        if (outLineColorStr === void 0) { outLineColorStr = '000000'; }
        if (fillColorStr === void 0) { fillColorStr = '000000'; }
        var _this = _super.call(this, outLineColorStr, fillColorStr) || this;
        if (point_1.checkPointsForEquality(vertex1, vertex2) ||
            point_1.checkPointsForEquality(vertex2, vertex3) ||
            point_1.checkPointsForEquality(vertex1, vertex3)) {
            throw new error_1.GeometricError('triangle points are the same');
        }
        _this.vertex1 = vertex1;
        _this.vertex2 = vertex2;
        _this.vertex3 = vertex3;
        return _this;
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
    return Triangle;
}(index_1.SolidShape));
exports.Triangle = Triangle;
