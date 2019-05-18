import {LineSegment} from "../geometric/shape/lineSegment";
import {Point} from "../geometric/shape/point";
import {Shape} from "../geometric/shape/shape";
import {Triangle} from "../geometric/shape/solidShape/triangle";
import {Rectangle} from "../geometric/shape/solidShape/rectangle";
import {Circle} from "../geometric/shape/solidShape/circle";

function getShapesPointsArr(shapesArray: Array<Shape>): Array<Point> {
	const getShapePoints = new Map();
	getShapePoints.set('LineSegment', (s: LineSegment): Array<Point> => [s.getStartPoint(), s.getEndPoint()]);
	getShapePoints.set('Triangle', (s: Triangle): Array<Point> => [s.getVertex1(), s.getVertex2(), s.getVertex3()]);
	getShapePoints.set('Rectangle', (s: Rectangle): Array<Point> => [s.getLeftTop(), s.getRightBottom()]);
	getShapePoints.set('Circle', (s: Circle): Array<Point> => [new Point(s.getCenter().x - s.getRadius(), s.getCenter().y + s.getRadius()), new Point(s.getCenter().x + s.getRadius(), s.getCenter().y - s.getRadius())]);
	
	let points: Array<Point> = [];
	shapesArray.forEach(shape => {
		points = points.concat(getShapePoints.get(shape.constructor.name)(shape))
	});
	
	return points
}

function searchBorderlinePointOfPointsArr(points: Array<Point>, getBorderlinePoint: Function): Point | undefined {
	if (points.length < 1) return undefined;
	let value: Point = points[0];
	points.forEach(point => {
		value = getBorderlinePoint(value, point);
	});
	
	return value
}

function searchShape(shapesArray: Array<Shape>, getShapeRule: Function): Shape | null {
	if (shapesArray.length < 1) return null;
	let shape = shapesArray[0];
	shapesArray.forEach(item => {
		if (getShapeRule(shape, item)) {
			shape = item
		}
	});
	
	return shape
}

export {getShapesPointsArr, searchBorderlinePointOfPointsArr, searchShape}
