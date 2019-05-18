import {LineSegment} from "../geometric/shape/lineSegment";
import {Point} from "../geometric/shape/point";
import {Shape} from "../geometric/shape/shape";
import {Triangle} from "../geometric/shape/solidShape/triangle";
import {Rectangle} from "../geometric/shape/solidShape/rectangle";
import {Circle} from "../geometric/shape/solidShape/circle";

function createLine(shapeData: any): LineSegment {
	return new LineSegment(
		new Point(+shapeData[1], +shapeData[2]),
		new Point(+shapeData[3], +shapeData[4]),
		shapeData[5]
	);
}

function createTriangle(shapeData: any): Triangle {
	return new Triangle(
		new Point(+shapeData[1], +shapeData[2]),
		new Point(+shapeData[3], +shapeData[4]),
		new Point(+shapeData[6], +shapeData[6]),
		shapeData[7], shapeData[8]
	);
}

function createRectangle(shapeData: any): Rectangle {
	return new Rectangle(
		new Point(+shapeData[1], +shapeData[2]),
		new Point(+shapeData[3], +shapeData[4]),
		shapeData[5], shapeData[6]
	);
}

function createCircle(shapeData: any): Circle {
	return new Circle(
		new Point(+shapeData[1], +shapeData[2]), +shapeData[3],
		shapeData[4], shapeData[5]
	);
}

function createShape(shapeDataStr: string): Shape | null {
	const shapeData = shapeDataStr.trim().split(' ');
	if (shapeData[0] === 'line') {
		return createLine(shapeData)
	} else if (shapeData[0] === 'triangle') {
		return createTriangle(shapeData)
	} else if (shapeData[0] === 'rectangle') {
		return createRectangle(shapeData);
	} else if (shapeData[0] === 'circle') {
		return createCircle(shapeData);
	}
	return null
}

export {createShape}
