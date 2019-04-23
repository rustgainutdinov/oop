import {testCheckPointsForEqualityFunction, testPointClass} from "./geometric/point";
import {testClassLineSegment, testGetLengthBetweenPoints} from "./geometric/line_segment";
import {testGetColorHexStringFromNumber, testGetColorNumberFromString} from "./geometric/color";
import {testTriangleClass} from "./geometric/solid_shape/triangle";
import {testRectangleClass} from "./geometric/solid_shape/rectangle";
import {testCircleClass} from "./geometric/solid_shape/circle";
import {testGetCoordinatesStrFromArr, testClassCanvas} from "./canvas";

testPointClass();
testCheckPointsForEqualityFunction();
testClassLineSegment();
testGetLengthBetweenPoints();
testGetColorNumberFromString();
testGetColorHexStringFromNumber();
testTriangleClass();
testRectangleClass();
testCircleClass();
testGetCoordinatesStrFromArr();
testClassCanvas();
