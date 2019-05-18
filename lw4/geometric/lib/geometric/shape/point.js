"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;
function checkPointsForEquality(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
exports.checkPointsForEquality = checkPointsForEquality;
function recalculateCoordinateForDrawing(point, leftTop) {
    return new Point(point.x - leftTop.x, leftTop.y - point.y);
}
exports.recalculateCoordinateForDrawing = recalculateCoordinateForDrawing;
