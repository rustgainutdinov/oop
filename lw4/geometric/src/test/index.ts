import {testCheckPointsForEqualityFunction, testPointClass} from "./geometric/point";
import {testClassLineSegment, testFunctionGetLengthBetweenPoints} from "./geometric/line_segment";
import {testFunctionGetColorHexStringFromNumber, testFunctionGetColorNumberFromString} from "./geometric/color";
import {testTriangleClass} from "./geometric/solid_shape/triangle";
import {testRectangleClass} from "./geometric/solid_shape/rectangle";
import {testCircleClass} from "./geometric/solid_shape/circle";

describe('Point class', testPointClass);
describe('Check points for equality function', testCheckPointsForEqualityFunction);
describe('Line Segment class', testClassLineSegment);
describe('Function get length between points function', testFunctionGetLengthBetweenPoints);
describe('Get color number from string', testFunctionGetColorNumberFromString);
describe('Get color hex string from string', testFunctionGetColorHexStringFromNumber);
describe('Triangle class', testTriangleClass);
describe('Rectangle class', testRectangleClass);
describe('Circle class', testCircleClass);
