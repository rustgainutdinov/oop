"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("../../geometric/canvas/canvas");
var point_1 = require("../../geometric/shape/point");
var fs_1 = __importDefault(require("fs"));
function testGetCoordinatesStrFromArr() {
    describe('get coordinates str from arr', function () {
        // it('should get coordinates string from array with 1 value', () => {
        // 	const arr = [new Point(9, 8)];
        // 	const str = '9,8';
        // 	assert(str === getCoordinatesStrFromArr(arr));
        // });
        //
        // it('should get coordinates string from array', () => {
        // 	const arr = [new Point(2, 5), new Point(4, 0)];
        // 	const str = '2,5,4,0';
        // 	assert(str === getCoordinatesStrFromArr(arr));
        // })
    });
}
exports.testGetCoordinatesStrFromArr = testGetCoordinatesStrFromArr;
function testClassCanvas() {
    describe('canvas class', function () {
        it('should create svg image', function () {
            var canvas = new canvas_1.Canvas(new point_1.Point(0, 100), new point_1.Point(100, 0));
            canvas.drawLine(new point_1.Point(30, 30), new point_1.Point(70, 70));
            canvas.drawCircle(new point_1.Point(30, 30), 20, '#333FFF');
            fs_1.default.writeFileSync('test.svg', canvas.getHtml());
        });
    });
}
exports.testClassCanvas = testClassCanvas;
