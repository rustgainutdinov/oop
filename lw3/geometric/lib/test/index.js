"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./geometric/point");
var line_segment_1 = require("./geometric/line_segment");
var color_1 = require("./geometric/color");
var triangle_1 = require("./geometric/solid_shape/triangle");
var rectangle_1 = require("./geometric/solid_shape/rectangle");
var circle_1 = require("./geometric/solid_shape/circle");
describe('Point class', point_1.testPointClass);
describe('Check points for equality function', point_1.testCheckPointsForEqualityFunction);
describe('Line Segment class', line_segment_1.testClassLineSegment);
describe('Function get length between points function', line_segment_1.testFunctionGetLengthBetweenPoints);
describe('Get color number from string', color_1.testFunctionGetColorNumberFromString);
describe('Get color hex string from string', color_1.testFunctionGetColorHexStringFromNumber);
describe('Triangle class', triangle_1.testTriangleClass);
describe('Rectangle class', rectangle_1.testRectangleClass);
describe('Circle class', circle_1.testCircleClass);
