"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("../../../../geometric/shape/solidShape/triangle");
var point_1 = require("../../../../geometric/shape/point");
var geomenricError_1 = require("../../../../geometric/error/geomenricError");
var methods_1 = require("../../../methods");
var color_1 = require("../../../../geometric/color");
var assert = require('assert');
function testTriangleClass() {
    describe('Triangle class', function () {
        var triangles = [
            { vertex1: new point_1.Point(3, 4), vertex2: new point_1.Point(0, 4), vertex3: new point_1.Point(5, 2), area: 3, perimeter: 11.21359193 },
            {
                vertex1: new point_1.Point(8, -11),
                vertex2: new point_1.Point(3, 3),
                vertex3: new point_1.Point(5, 7),
                area: 24,
                perimeter: 37.58649229
            },
            { vertex1: new point_1.Point(2, 2), vertex2: new point_1.Point(0, 8), vertex3: new point_1.Point(3, 3), area: 4, perimeter: 13.56972078 }
        ];
        it('Should create triangle with vertexes: (0, 0), (0, 4), (3, 0)', function () {
            var vertex1 = new point_1.Point(0, 0);
            var vertex2 = new point_1.Point(0, 4);
            var vertex3 = new point_1.Point(3, 0);
            var triangle = new triangle_1.Triangle(vertex1, vertex2, vertex3);
            assert(methods_1.checkForEquality(triangle.getVertex1(), vertex1));
            assert(methods_1.checkForEquality(triangle.getVertex2(), vertex2));
            assert(methods_1.checkForEquality(triangle.getVertex3(), vertex3));
        });
        it('Should create triangle with others vertexes', function () {
            triangles.forEach(function (item) {
                var triangle = new triangle_1.Triangle(item.vertex1, item.vertex2, item.vertex3);
                assert(methods_1.checkForEquality(triangle.getVertex1(), item.vertex1));
                assert(methods_1.checkForEquality(triangle.getVertex2(), item.vertex2));
                assert(methods_1.checkForEquality(triangle.getVertex3(), item.vertex3));
            });
        });
        it('Should not create triangle if at least two points are the same', function () {
            var triangles = [
                { vertex1: new point_1.Point(0, 0), vertex2: new point_1.Point(0, 0), vertex3: new point_1.Point(3, 5) },
                { vertex1: new point_1.Point(5, 2), vertex2: new point_1.Point(3, 3), vertex3: new point_1.Point(3, 3) },
                { vertex1: new point_1.Point(2, 2), vertex2: new point_1.Point(0, 0), vertex3: new point_1.Point(2, 2) }
            ];
            triangles.forEach(function (item) {
                try {
                    new triangle_1.Triangle(item.vertex1, item.vertex2, item.vertex3);
                    throw new Error('Triangle created with the same points');
                }
                catch (e) {
                    if (!(e instanceof geomenricError_1.GeometricError))
                        throw e;
                }
            });
        });
        it('Should get triangle perimeter', function () {
            triangles.forEach(function (item) {
                var triangle = new triangle_1.Triangle(item.vertex1, item.vertex2, item.vertex3);
                assert(Math.abs(Math.round((triangle.getPerimeter() - item.perimeter) * 1000) / 1000) === 0);
            });
        });
        it('Should get triangle area', function () {
            triangles.forEach(function (item) {
                var triangle = new triangle_1.Triangle(item.vertex1, item.vertex2, item.vertex3);
                assert(Math.abs(Math.round((triangle.getArea() - item.area) * 1000) / 1000) === 0);
            });
        });
        it('Should set and translate outline color to number', function () {
            var colors = ['FFFFFF', 'ABC626'];
            colors.forEach(function (item) {
                var triangle = new triangle_1.Triangle(new point_1.Point(0, 1), new point_1.Point(1, 1), new point_1.Point(4, 3), item);
                assert(triangle.getOutlineColor() === color_1.getColorNumberFromString(item));
            });
        });
        it('Should set default black outline color', function () {
            var triangle = new triangle_1.Triangle(new point_1.Point(4, 5), new point_1.Point(9, 6), new point_1.Point(4, 3));
            assert(triangle.getOutlineColor() === 0);
        });
        it('Should set and translate fill color to number', function () {
            var colors = ['FFFFFF', 'ABC626'];
            colors.forEach(function (item) {
                var triangle = new triangle_1.Triangle(new point_1.Point(0, 1), new point_1.Point(1, 1), new point_1.Point(4, 3), '000000', item);
                assert(triangle.getFillColor() === color_1.getColorNumberFromString(item));
            });
        });
        it('Should set default black fill color', function () {
            var triangle = new triangle_1.Triangle(new point_1.Point(4, 5), new point_1.Point(9, 6), new point_1.Point(4, 3));
            assert(triangle.getFillColor() === 0);
        });
        it('Should set default shape description', function () {
            var triangle = new triangle_1.Triangle(new point_1.Point(4, 5), new point_1.Point(9, 6), new point_1.Point(4, 3));
            assert(typeof triangle.toString() === 'string' && triangle.toString().length !== 0);
        });
    });
}
exports.testTriangleClass = testTriangleClass;
