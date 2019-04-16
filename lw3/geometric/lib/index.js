"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var line_segment_1 = require("./geometric/shape/line_segment");
var triangle_1 = require("./geometric/shape/solid_shape/triangle");
var rectangle_1 = require("./geometric/shape/solid_shape/rectangle");
var circle_1 = require("./geometric/shape/solid_shape/circle");
var point_1 = require("./geometric/point");
var readline = require('readline-sync');
function askShapes() {
    var shapesArray = [];
    while (true) {
        var shapeData = readline.question('Shape: ').trim().split(' ');
        var shape = void 0;
        try {
            if (shapeData[0] === 'line') {
                shape = new line_segment_1.LineSegment(new point_1.Point(+shapeData[1], +shapeData[2]), new point_1.Point(+shapeData[3], +shapeData[4]), shapeData[5]);
            }
            else if (shapeData[0] === 'triangle') {
                shape = new triangle_1.Triangle(new point_1.Point(+shapeData[1], +shapeData[2]), new point_1.Point(+shapeData[3], +shapeData[4]), new point_1.Point(+shapeData[6], +shapeData[6]), shapeData[7], shapeData[8]);
            }
            else if (shapeData[0] === 'rectangle') {
                shape = new rectangle_1.Rectangle(new point_1.Point(+shapeData[1], +shapeData[2]), new point_1.Point(+shapeData[3], +shapeData[4]), shapeData[5], shapeData[6]);
            }
            else if (shapeData[0] === 'circle') {
                shape = new circle_1.Circle(new point_1.Point(+shapeData[1], +shapeData[2]), shapeData[3], shapeData[4], shapeData[5]);
            }
            else if (shapeData[0] === '...') {
                break;
            }
            else {
                var answer = readline.question('Do you watn to exit?(y/n): ');
                if (answer.toLowerCase() === 'y') {
                    break;
                }
                continue;
            }
        }
        catch (e) {
            console.log(e.message);
            continue;
        }
        shapesArray.push(shape);
    }
    return shapesArray;
}
function searchShapeWithTheLargestArea(shapesArray) {
    var shape = shapesArray[0];
    shapesArray.forEach(function (item) {
        if (item.getArea() > shape.getArea()) {
            shape = item;
        }
    });
    return shape;
}
function searchShapeWithTheSmallestPerimeter(shapesArray) {
    var shape = shapesArray[0];
    shapesArray.forEach(function (item) {
        if (item.getPerimeter() < shape.getPerimeter()) {
            shape = item;
        }
    });
    return shape;
}
function showShape(shape) {
    console.log('Area: ' + shape.getArea());
    console.log('Perimeter: ' + shape.getPerimeter());
    console.log('Out line color: ' + shape.getOutlineColor());
    if ('getFillColor' in shape) {
        console.log('Fill color: ' + shape.getFillColor());
    }
    console.log('Individual data: ' + shape.toString());
}
var shapesArray = askShapes();
if (shapesArray.length > 0) {
    var shapeWithTheLargesArea = searchShapeWithTheLargestArea(shapesArray);
    var shapeWithTheSmallestPerimeter = searchShapeWithTheSmallestPerimeter(shapesArray);
    console.log('\nShape with the largest area: ');
    showShape(shapeWithTheLargesArea);
    console.log('\nShape with the smallest perimeter: ');
    showShape(shapeWithTheSmallestPerimeter);
}
