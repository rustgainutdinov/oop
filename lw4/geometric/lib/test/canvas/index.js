"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = require("../../geometric/canvas/canvas");
var point_1 = require("../../geometric/shape/point");
var fs_1 = __importDefault(require("fs"));
var assert_1 = __importDefault(require("assert"));
function testGetCoordinatesStrFromArr() {
    describe('get coordinates str from arr', function () {
        it('should get coordinates string from array', function () {
            var arr = [new point_1.Point(2, 5), new point_1.Point(4, 0)];
            var correctArr = [2, 5, 4, 0];
            canvas_1.getCoordinatesStrFromArr(arr).forEach(function (item, i) {
                assert_1.default(item === correctArr[i]);
            });
        });
    });
}
exports.testGetCoordinatesStrFromArr = testGetCoordinatesStrFromArr;
function testClassCanvas() {
    describe('canvas class', function () {
        it('should create svg image', function () {
            var canvas = new canvas_1.Canvas(new point_1.Point(0, 10), new point_1.Point(10, 0));
            canvas.drawLine(new point_1.Point(5, 5), new point_1.Point(7, 7), 0x2125ff);
            canvas.drawCircle(new point_1.Point(5, 5), 4, 0xff3526);
            canvas.fillCircle(new point_1.Point(5, 5), 4, 0xFFF000);
            canvas.fillPolygon([new point_1.Point(3, 5), new point_1.Point(9, 9), new point_1.Point(1, 1)], 0xAAAAAA);
            fs_1.default.writeFileSync('test.svg', canvas.getHtml());
        });
    });
}
exports.testClassCanvas = testClassCanvas;
