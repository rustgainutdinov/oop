"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var window = require("svgdom");
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
        this.leftTopPoint = leftTopPoint;
        this.rightBottomPoint = rightBottomPoint;
        this.canvas = SVG(document.documentElement)
            .size(rightBottomPoint.x - leftTopPoint.x, leftTopPoint.y - rightBottomPoint.y);
    }
    Canvas.prototype.drawLine = function (from, to, color) {
        this.canvas.line(getCoordinatesStrFromArr([from, to])).stroke({
            color: color ? '#' + color : '#000',
            width: 10
        });
    };
    Canvas.prototype.fillPolygon = function (points, fillColor) {
        this.canvas.polygon(getCoordinatesStrFromArr(points)).fill(fillColor ? '#' + fillColor : '#000');
    };
    Canvas.prototype.drawCircle = function (center, radius, color) {
        this.canvas.circle(radius).fill(color ? '#' + color : '#000').move((center.x - radius), (center.y - radius));
        this.canvas.circle(radius - 10).fill('#FFFFFF').move((center.x - radius + 5), (center.y - radius + 5));
        // this.canvas.circle(radius).move((center.x - radius - 5) + ',' + (center.y - radius - 5)).fill('#FFF');
    };
    Canvas.prototype.fillCircle = function (center, radius, fillColor) {
        this.canvas.circle(radius).move((center.x - radius) + ',' + (center.y - radius)).fill(fillColor ? '#' + fillColor : '#000');
    };
    Canvas.prototype.getHtml = function () {
        return this.canvas.node.outerHTML;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
