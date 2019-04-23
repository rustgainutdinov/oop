"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("../../../geometric/shape/point");
var assert = require('assert');
function testPointClass() {
    describe('Point class', function () {
        it('Should create point with x and y properties', function () {
            var points = [
                [0, 0],
                [1, 5],
                [-2, 6],
                [3, -3],
                [-9, -9]
            ];
            points.forEach(function (item) {
                var point = new point_1.Point(item[0], item[1]);
                assert(point.x === item[0]);
                assert(point.y === item[1]);
            });
        });
    });
}
exports.testPointClass = testPointClass;
function testCheckPointsForEqualityFunction() {
    describe('Check points for equality function', function () {
        it('Should return true if points are the same', function () {
            assert(point_1.checkPointsForEquality(new point_1.Point(0, 1), new point_1.Point(0, 1)) === true);
            assert(point_1.checkPointsForEquality(new point_1.Point(-1, 9), new point_1.Point(-1, 9)) === true);
        });
        it('Should return false if points are not the same', function () {
            assert(point_1.checkPointsForEquality(new point_1.Point(0, 1), new point_1.Point(1, 0)) === false);
            assert(point_1.checkPointsForEquality(new point_1.Point(8, 5), new point_1.Point(-1, 9)) === false);
        });
    });
}
exports.testCheckPointsForEqualityFunction = testCheckPointsForEqualityFunction;
