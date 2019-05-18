"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_shape_1 = require("./modules/create_shape");
var searchMethods_1 = require("./modules/searchMethods");
// @ts-ignore
var readline_sync_1 = __importDefault(require("readline-sync"));
var point_1 = require("./geometric/shape/point");
var canvas_1 = require("./geometric/canvas/canvas");
var fs_1 = __importDefault(require("fs"));
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
function showShape(shape) {
    if (shape) {
        console.log(shape.toString());
    }
    else {
        console.log(null);
    }
}
function getLeftTopPoint(a, b) {
    return new point_1.Point(a.x > b.x ? b.x : a.x, a.y < b.y ? b.y : a.y);
}
function getRightBottomPoint(a, b) {
    return new point_1.Point(a.x < b.x ? b.x : a.x, a.y > b.y ? b.y : a.y);
}
function getShapeWithTheLargestArea(a, b) {
    return a.getArea() < b.getArea();
}
function getShapeWithTheSmallestPerimeter(a, b) {
    return a.getPerimeter() > b.getPerimeter();
}
function main() {
    var shapesArray = askShapes();
    console.log('\nShape with the largest area: ');
    showShape(searchMethods_1.searchShape(shapesArray, getShapeWithTheLargestArea));
    console.log('\nShape with the smallest perimeter: ');
    showShape(searchMethods_1.searchShape(shapesArray, getShapeWithTheSmallestPerimeter));
    var points = searchMethods_1.getShapesPointsArr(shapesArray);
    var leftTopPoint = searchMethods_1.searchBorderlinePointOfPointsArr(points, getLeftTopPoint);
    var rightBottomPoint = searchMethods_1.searchBorderlinePointOfPointsArr(points, getRightBottomPoint);
    if (leftTopPoint && rightBottomPoint) {
        var canvas_2 = new canvas_1.Canvas(leftTopPoint, rightBottomPoint);
        var shapesArrayDrawable = shapesArray;
        shapesArrayDrawable.forEach(function (shape) {
            shape.draw(canvas_2);
        });
        fs_1.default.writeFileSync('result.svg', canvas_2.getHtml());
    }
}
main();
