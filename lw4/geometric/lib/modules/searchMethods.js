"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("../geometric/shape/point");
function getShapesPointsArr(shapesArray) {
    var getShapePoints = new Map();
    getShapePoints.set('LineSegment', function (s) { return [s.getStartPoint(), s.getEndPoint()]; });
    getShapePoints.set('Triangle', function (s) { return [s.getVertex1(), s.getVertex2(), s.getVertex3()]; });
    getShapePoints.set('Rectangle', function (s) { return [s.getLeftTop(), s.getRightBottom()]; });
    getShapePoints.set('Circle', function (s) { return [new point_1.Point(s.getCenter().x - s.getRadius(), s.getCenter().y + s.getRadius()), new point_1.Point(s.getCenter().x + s.getRadius(), s.getCenter().y - s.getRadius())]; });
    var points = [];
    shapesArray.forEach(function (shape) {
        points = points.concat(getShapePoints.get(shape.constructor.name)(shape));
    });
    return points;
}
exports.getShapesPointsArr = getShapesPointsArr;
function searchBorderlinePointOfPointsArr(points, getBorderlinePoint) {
    if (points.length < 1)
        return undefined;
    var value = points[0];
    points.forEach(function (point) {
        value = getBorderlinePoint(value, point);
    });
    return value;
}
exports.searchBorderlinePointOfPointsArr = searchBorderlinePointOfPointsArr;
function searchShape(shapesArray, getShapeRule) {
    if (shapesArray.length < 1)
        return null;
    var shape = shapesArray[0];
    shapesArray.forEach(function (item) {
        if (getShapeRule(shape, item)) {
            shape = item;
        }
    });
    return shape;
}
exports.searchShape = searchShape;
