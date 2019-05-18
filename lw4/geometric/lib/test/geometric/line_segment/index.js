"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lineSegment_1 = require("../../../geometric/shape/lineSegment");
var point_1 = require("../../../geometric/shape/point");
var methods_1 = require("../../methods");
var geomenricError_1 = require("../../../geometric/error/geomenricError");
var color_1 = require("../../../geometric/color");
var canvas_1 = require("../../../geometric/canvas/canvas");
var fs_1 = __importDefault(require("fs"));
var assert = require('assert');
var lines = [
    { start: new point_1.Point(0, 1), end: new point_1.Point(0, 2), perimeter: 1 },
    { start: new point_1.Point(-3, 6), end: new point_1.Point(-1, 7), perimeter: 2.2360679774998 },
    { start: new point_1.Point(-7, -3), end: new point_1.Point(-6, -2), perimeter: 1.4142135623731 },
    { start: new point_1.Point(1, 1), end: new point_1.Point(0, -2), perimeter: 3.1622776601684 },
    { start: new point_1.Point(-3, 1), end: new point_1.Point(0, -4), perimeter: 5.8309518948453 },
    { start: new point_1.Point(8, -11), end: new point_1.Point(0, 20), perimeter: 32.015621187164 }
];
function testGetLengthBetweenPoints() {
    describe('Get length between points', function () {
        it('Should get length between points', function () {
            lines.forEach(function (item) {
                assert(Math.round((lineSegment_1.getLengthBetweenPoints(item.start, item.end) - item.perimeter) * 1000) === 0);
            });
        });
    });
}
exports.testGetLengthBetweenPoints = testGetLengthBetweenPoints;
function testClassLineSegment() {
    describe('Line Segment class', function () {
        it('Should create line with start point(0, 0) and end point (0, 1)', function () {
            var startPoint = new point_1.Point(0, 0);
            var endPoint = new point_1.Point(0, 1);
            var line = new lineSegment_1.LineSegment(startPoint, endPoint);
            assert(methods_1.checkForEquality(line.getStartPoint(), startPoint));
            assert(methods_1.checkForEquality(line.getEndPoint(), endPoint));
        });
        it('Should create lines and get start and end points', function () {
            lines.forEach(function (item) {
                var line = new lineSegment_1.LineSegment(item.start, item.end);
                assert(methods_1.checkForEquality(line.getStartPoint(), item.start));
                assert(methods_1.checkForEquality(line.getEndPoint(), item.end));
            });
        });
        it('Should not create line if points are the same', function () {
            var incorrectLines = [
                { start: new point_1.Point(1, 1), end: new point_1.Point(1, 1) },
                { start: new point_1.Point(-2, -51), end: new point_1.Point(-2, -51) },
                { start: new point_1.Point(-8, 1), end: new point_1.Point(-8, 1) }
            ];
            incorrectLines.forEach(function (item) {
                try {
                    var line = new lineSegment_1.LineSegment(item.start, item.end);
                    throw new Error('created line with the same points');
                }
                catch (e) {
                    if (!(e instanceof geomenricError_1.GeometricError))
                        throw e;
                }
            });
        });
        it('Should get lines area', function () {
            lines.forEach(function (item) {
                var line = new lineSegment_1.LineSegment(item.start, item.end);
                assert(line.getArea() === 0);
            });
        });
        it('Should get line perimeter', function () {
            lines.forEach(function (item) {
                var line = new lineSegment_1.LineSegment(item.start, item.end);
                assert(Math.round((line.getPerimeter() - item.perimeter) * 1000) === 0);
            });
        });
        it('Should set and translate outline color to number', function () {
            var colors = ['FFFFFF', 'ABC626'];
            colors.forEach(function (item) {
                var line = new lineSegment_1.LineSegment(new point_1.Point(0, 1), new point_1.Point(1, 1), item);
                assert(line.getOutlineColor() === color_1.getColorNumberFromString(item));
            });
        });
        it('Should set default black outline color', function () {
            var line = new lineSegment_1.LineSegment(new point_1.Point(4, 5), new point_1.Point(9, 6));
            assert(line.getOutlineColor() === 0);
        });
        it('Should set default shape description', function () {
            var line = new lineSegment_1.LineSegment(new point_1.Point(4, 5), new point_1.Point(9, 6), '000000');
            assert(typeof line.toString() === 'string' && line.toString().length !== 0);
        });
        it('should draw line', function () {
            var canvas = new canvas_1.Canvas(new point_1.Point(0, 10), new point_1.Point(10, 0));
            var line = new lineSegment_1.LineSegment(new point_1.Point(4, 5), new point_1.Point(9, 6), '1a9399');
            line.draw(canvas);
            fs_1.default.writeFileSync('test4.svg', canvas.getHtml());
        });
    });
}
exports.testClassLineSegment = testClassLineSegment;
