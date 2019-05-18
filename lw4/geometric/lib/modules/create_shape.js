"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lineSegment_1 = require("../geometric/shape/lineSegment");
var point_1 = require("../geometric/shape/point");
var triangle_1 = require("../geometric/shape/solidShape/triangle");
var rectangle_1 = require("../geometric/shape/solidShape/rectangle");
var circle_1 = require("../geometric/shape/solidShape/circle");
function createLine(shapeData) {
    return new lineSegment_1.LineSegment(new point_1.Point(+shapeData[1], +shapeData[2]), new point_1.Point(+shapeData[3], +shapeData[4]), shapeData[5]);
}
function createTriangle(shapeData) {
    return new triangle_1.Triangle(new point_1.Point(+shapeData[1], +shapeData[2]), new point_1.Point(+shapeData[3], +shapeData[4]), new point_1.Point(+shapeData[6], +shapeData[6]), shapeData[7], shapeData[8]);
}
function createRectangle(shapeData) {
    return new rectangle_1.Rectangle(new point_1.Point(+shapeData[1], +shapeData[2]), new point_1.Point(+shapeData[3], +shapeData[4]), shapeData[5], shapeData[6]);
}
function createCircle(shapeData) {
    return new circle_1.Circle(new point_1.Point(+shapeData[1], +shapeData[2]), +shapeData[3], shapeData[4], shapeData[5]);
}
function createShape(shapeDataStr) {
    var shapeData = shapeDataStr.trim().split(' ');
    if (shapeData[0] === 'line') {
        return createLine(shapeData);
    }
    else if (shapeData[0] === 'triangle') {
        return createTriangle(shapeData);
    }
    else if (shapeData[0] === 'rectangle') {
        return createRectangle(shapeData);
    }
    else if (shapeData[0] === 'circle') {
        return createCircle(shapeData);
    }
    return null;
}
exports.createShape = createShape;
