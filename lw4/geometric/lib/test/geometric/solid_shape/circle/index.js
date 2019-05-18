"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("../../../../geometric/shape/solidShape/circle");
var point_1 = require("../../../../geometric/shape/point");
var assert_1 = __importDefault(require("assert"));
var geomenricError_1 = require("../../../../geometric/error/geomenricError");
var color_1 = require("../../../../geometric/color");
var canvas_1 = require("../../../../geometric/canvas/canvas");
var fs_1 = __importDefault(require("fs"));
function testCircleClass() {
    describe('Circle class', function () {
        it('Should create new circle with center in (0, 0) and radius = 0.5', function () {
            var center = new point_1.Point(0, 0);
            var radius = 0.5;
            var circle = new circle_1.Circle(center, radius);
            assert_1.default(point_1.checkPointsForEquality(circle.getCenter(), center));
            assert_1.default(circle.getRadius() === radius);
        });
        var circles = [
            { center: new point_1.Point(0, 0), radius: 1, area: Math.PI, perimeter: Math.PI * 2 },
            { center: new point_1.Point(5, 5), radius: 9, area: Math.PI * 9 * 9, perimeter: Math.PI * 18 },
            { center: new point_1.Point(-3, 0), radius: 4, area: Math.PI * 4 * 4, perimeter: Math.PI * 8 },
            { center: new point_1.Point(4, -5), radius: 2, area: Math.PI * 2 * 2, perimeter: Math.PI * 4 },
        ];
        it('Should create circle with other initial data', function () {
            circles.forEach(function (item) {
                var circle = new circle_1.Circle(item.center, item.radius);
                assert_1.default(point_1.checkPointsForEquality(circle.getCenter(), item.center));
                assert_1.default(circle.getRadius() === item.radius);
            });
        });
        it('Should check radius to be more than 0', function () {
            var incorrectCircles = [
                { center: new point_1.Point(0, 0), radius: 0 },
                { center: new point_1.Point(2, 4), radius: -1 }
            ];
            incorrectCircles.forEach(function (item) {
                try {
                    new circle_1.Circle(item.center, item.radius);
                    throw new Error('circle created with incorrect radius');
                }
                catch (e) {
                    if (!(e instanceof geomenricError_1.GeometricError))
                        throw e;
                }
            });
        });
        it('Should get circle area', function () {
            circles.forEach(function (item) {
                var circle = new circle_1.Circle(item.center, item.radius);
                assert_1.default(Math.round((circle.getArea() - item.area) * 1000) / 1000 === 0);
            });
        });
        it('Should get circle perimeter', function () {
            circles.forEach(function (item) {
                var circle = new circle_1.Circle(item.center, item.radius);
                assert_1.default(Math.round((circle.getPerimeter() - item.perimeter) * 1000) / 1000 === 0);
            });
        });
        it('Should set and translate outline color to number', function () {
            var colors = ['FFFFFF', 'ABC626'];
            colors.forEach(function (item) {
                var circle = new circle_1.Circle(new point_1.Point(-1, 1), 5, item);
                assert_1.default(circle.getOutlineColor() === color_1.getColorNumberFromString(item));
            });
        });
        it('Should set default black outline color', function () {
            var circle = new circle_1.Circle(new point_1.Point(-1, 1), 5);
            assert_1.default(circle.getOutlineColor() === 0);
        });
        it('Should set and translate fill color to number', function () {
            var colors = ['FFFFFF', 'ABC626'];
            colors.forEach(function (item) {
                var circle = new circle_1.Circle(new point_1.Point(-1, 1), 5, '000000', item);
                assert_1.default(circle.getFillColor() === color_1.getColorNumberFromString(item));
            });
        });
        it('Should set default black fill color', function () {
            var circle = new circle_1.Circle(new point_1.Point(-1, 1), 5);
            assert_1.default(circle.getFillColor() === 0);
        });
        it('Should set default shape description', function () {
            var circle = new circle_1.Circle(new point_1.Point(-1, 1), 5);
            assert_1.default(typeof circle.toString() === 'string' && circle.toString().length !== 0);
        });
        it('Should draw circle', function () {
            var circle = new circle_1.Circle(new point_1.Point(-4, -4), 5, 'FFF000', '333555');
            var canvas = new canvas_1.Canvas(new point_1.Point(-10, 2), new point_1.Point(2, -10));
            circle.draw(canvas);
            fs_1.default.writeFileSync('test1.svg', canvas.getHtml());
        });
    });
}
exports.testCircleClass = testCircleClass;
