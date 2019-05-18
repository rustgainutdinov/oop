"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("../../../../geometric/shape/solidShape/rectangle");
var point_1 = require("../../../../geometric/shape/point");
var geomenricError_1 = require("../../../../geometric/error/geomenricError");
var color_1 = require("../../../../geometric/color");
var canvas_1 = require("../../../../geometric/canvas/canvas");
var fs_1 = __importDefault(require("fs"));
var assert = require('assert');
function testRectangleClass() {
    describe('Rectangle class', function () {
        it('Should create rectangle with left top (0, 1) and right bottom (1, 0)', function () {
            var leftTop = new point_1.Point(0, 1);
            var rightBottom = new point_1.Point(1, 0);
            var rectangle = new rectangle_1.Rectangle(leftTop, rightBottom);
            assert(point_1.checkPointsForEquality(rectangle.getLeftTop(), leftTop));
            assert(point_1.checkPointsForEquality(rectangle.getRightBottom(), rightBottom));
        });
        var rectangles = [
            { lt: new point_1.Point(-1, 1), rb: new point_1.Point(1, -1), area: 4, perimeter: 8, w: 2, h: 2 },
            { lt: new point_1.Point(2, 3), rb: new point_1.Point(5, 2), area: 3, perimeter: 8, w: 3, h: 1 },
            { lt: new point_1.Point(-1, -1), rb: new point_1.Point(5, -8), area: 42, perimeter: 26, w: 6, h: 7 },
            { lt: new point_1.Point(-5, 4), rb: new point_1.Point(5, -4), area: 80, perimeter: 36, w: 10, h: 8 }
        ];
        it('Should create rectangle with others values', function () {
            rectangles.forEach(function (item) {
                var rectangle = new rectangle_1.Rectangle(item.lt, item.rb);
                assert(point_1.checkPointsForEquality(rectangle.getLeftTop(), item.lt));
                assert(point_1.checkPointsForEquality(rectangle.getRightBottom(), item.rb));
            });
        });
        it('Should not create rectangles if left top point lower or to the right than right bottom else or sides are equal', function () {
            var incorrectRectangles = [
                { lt: new point_1.Point(4, 1), rb: new point_1.Point(-1, -7) },
                { lt: new point_1.Point(5, -1), rb: new point_1.Point(8, 9) },
                { lt: new point_1.Point(5, 3), rb: new point_1.Point(2, 2) },
                { lt: new point_1.Point(-1, 1), rb: new point_1.Point(-1, -1) },
                { lt: new point_1.Point(7, 3), rb: new point_1.Point(9, 3) },
                { lt: new point_1.Point(7, 7), rb: new point_1.Point(7, 7) }
            ];
            incorrectRectangles.forEach(function (item) {
                try {
                    new rectangle_1.Rectangle(item.lt, item.rb);
                    throw new Error('created incorrect rectangle');
                }
                catch (e) {
                    if (!(e instanceof geomenricError_1.GeometricError))
                        throw e;
                }
            });
        });
        it('Should get width of rectangle', function () {
            rectangles.forEach(function (item) {
                var rectangle = new rectangle_1.Rectangle(item.lt, item.rb);
                assert(rectangle.getWidth() === item.w);
            });
        });
        it('Should get height of rectangle', function () {
            rectangles.forEach(function (item) {
                var rectangle = new rectangle_1.Rectangle(item.lt, item.rb);
                assert(rectangle.getHeight() === item.h);
            });
        });
        it('Should get rectangle area', function () {
            rectangles.forEach(function (item) {
                var rectangle = new rectangle_1.Rectangle(item.lt, item.rb);
                assert(rectangle.getArea() === item.area);
            });
        });
        it('Should get rectangle perimeter', function () {
            rectangles.forEach(function (item) {
                var rectangle = new rectangle_1.Rectangle(item.lt, item.rb);
                assert(rectangle.getPerimeter() === item.perimeter);
            });
        });
        it('Should set and translate outline color to number', function () {
            var colors = ['FFFFFF', 'ABC626'];
            colors.forEach(function (item) {
                var rectangle = new rectangle_1.Rectangle(new point_1.Point(-1, 1), new point_1.Point(1, -1), item);
                assert(rectangle.getOutlineColor() === color_1.getColorNumberFromString(item));
            });
        });
        it('Should set default black outline color', function () {
            var rectangle = new rectangle_1.Rectangle(new point_1.Point(-1, 1), new point_1.Point(1, -1));
            assert(rectangle.getOutlineColor() === 0);
        });
        it('Should set and translate fill color to number', function () {
            var colors = ['FFFFFF', 'ABC626'];
            colors.forEach(function (item) {
                var rectangle = new rectangle_1.Rectangle(new point_1.Point(-1, 1), new point_1.Point(1, -1), '000000', item);
                assert(rectangle.getFillColor() === color_1.getColorNumberFromString(item));
            });
        });
        it('Should set default black fill color', function () {
            var rectangle = new rectangle_1.Rectangle(new point_1.Point(-1, 1), new point_1.Point(1, -1));
            assert(rectangle.getFillColor() === 0);
        });
        it('Should set default shape description', function () {
            var rectangle = new rectangle_1.Rectangle(new point_1.Point(-1, 1), new point_1.Point(1, -1));
            assert(typeof rectangle.toString() === 'string' && rectangle.toString().length !== 0);
        });
        it('should draw rectangle', function () {
            var rectangle = new rectangle_1.Rectangle(new point_1.Point(5, 15), new point_1.Point(15, -15), 'FFF000', '333555');
            var canvas = new canvas_1.Canvas(new point_1.Point(0, 20), new point_1.Point(20, -20));
            rectangle.draw(canvas);
            fs_1.default.writeFileSync('test2.svg', canvas.getHtml());
        });
    });
}
exports.testRectangleClass = testRectangleClass;
