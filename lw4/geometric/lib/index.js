"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_shape_1 = require("./modules/create_shape");
// @ts-ignore
var readline_sync_1 = __importDefault(require("readline-sync"));
function askShapes() {
    var shapesArray = [];
    while (true) {
        var shapeDataStr = readline_sync_1.default.question('Shape: ');
        var shape = void 0;
        try {
            if (shapeDataStr.indexOf('...') !== -1) {
                break;
            }
            shape = create_shape_1.createShape(shapeDataStr);
            if (!shape) {
                throw new Error('Incorrect input');
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
    if (shapesArray.length < 1)
        return null;
    var shape = shapesArray[0];
    shapesArray.forEach(function (item) {
        if (item.getArea() > shape.getArea()) {
            shape = item;
        }
    });
    return shape;
}
function searchShapeWithTheSmallestPerimeter(shapesArray) {
    if (shapesArray.length < 1)
        return null;
    var shape = shapesArray[0];
    shapesArray.forEach(function (item) {
        if (item.getPerimeter() < shape.getPerimeter()) {
            shape = item;
        }
    });
    return shape;
}
function showShape(shape) {
    if (shape) {
        console.log(shape.toString());
    }
    else {
        console.log(null);
    }
}
function main() {
    var shapesArray = askShapes();
    console.log('\nShape with the largest area: ');
    showShape(searchShapeWithTheLargestArea(shapesArray));
    console.log('\nShape with the smallest perimeter: ');
    showShape(searchShapeWithTheSmallestPerimeter(shapesArray));
}
main();
