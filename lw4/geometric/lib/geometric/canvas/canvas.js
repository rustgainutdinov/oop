"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var window = require("svgdom");
var color_1 = require("../color");
var point_1 = require("../shape/point");
var SVG = require('svg.js')(window);
var document = window.document;
function getCoordinatesStrFromArr(points) {
    var pointsArr = [];
    points.forEach(function (point, i) {
        pointsArr.push(point.x);
        pointsArr.push(point.y);
    });
    return pointsArr;
}
exports.getCoordinatesStrFromArr = getCoordinatesStrFromArr;
var Canvas = /** @class */ (function () {
    function Canvas(leftTopPoint, rightBottomPoint) {
        leftTopPoint = new point_1.Point(leftTopPoint.x - 1, leftTopPoint.y + 1);
        rightBottomPoint = new point_1.Point(rightBottomPoint.x + 1, rightBottomPoint.y - 1);
        this.leftTopPoint = leftTopPoint;
        this.rightBottomPoint = rightBottomPoint;
        this.canvas = SVG(document.documentElement)
            .size(rightBottomPoint.x - leftTopPoint.x, leftTopPoint.y - rightBottomPoint.y);
    }
    Canvas.prototype.drawLine = function (from, to, color) {
        if (color === void 0) { color = 0x0; }
        this.canvas.line(getCoordinatesStrFromArr([from, to])).stroke({
            color: '#' + color_1.getColorHexStringFromNumber(color),
            width: 1
        });
    };
    Canvas.prototype.fillPolygon = function (points, fillColor) {
        if (fillColor === void 0) { fillColor = 0x0; }
        this.canvas.polygon(getCoordinatesStrFromArr(points)).fill('#' + color_1.getColorHexStringFromNumber(fillColor));
    };
    Canvas.prototype.drawCircle = function (center, radius, color) {
        if (color === void 0) { color = 0x0; }
        this.fillCircle(new point_1.Point(center.x, center.y), radius + 1, color);
        this.fillCircle(center, radius, 0xFFFFFF);
    };
    Canvas.prototype.fillCircle = function (center, radius, fillColor) {
        if (fillColor === void 0) { fillColor = 0x0; }
        this.canvas.circle(radius * 2).fill('#' + color_1.getColorHexStringFromNumber(fillColor)).move((center.x - radius), (center.y - radius));
    };
    Canvas.prototype.getHtml = function () {
        return this.canvas.node.outerHTML;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
