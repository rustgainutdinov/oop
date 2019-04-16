import {Shape} from "../index";
import {Point} from "../../point";
import {getColorNumberFromString} from "../../color";
import {GeometricError} from "../../error";

class LineSegment implements Shape {
	private readonly startPoint: Point;
	private readonly endPoint: Point;
	private readonly outLineColor: number;
	
	constructor(startPoint: Point, endPoint: Point, outLineColorStr = '000000') {
		if (startPoint.x === endPoint.x && startPoint.y === endPoint.y) {
			throw new GeometricError('Creation line with the same points is impossible');
		}
		
		this.outLineColor = getColorNumberFromString(outLineColorStr);
		
		this.startPoint = startPoint;
		this.endPoint = endPoint;
	}
	
	getArea(): number {
		return 0
	}
	
	getPerimeter(): number {
		return getLengthBetweenPoints(this.startPoint, this.endPoint)
	}
	
	toString(): string {
		return `Start point: (${this.getStartPoint().x}, ${this.getStartPoint().y}),
		end point: (${this.getEndPoint().x}, ${this.getEndPoint().y})`
	}
	
	getOutlineColor(): number {
		return this.outLineColor
	}
	
	getStartPoint(): Point {
		return this.startPoint
	}
	
	getEndPoint(): Point {
		return this.endPoint
	}
}

function getLengthBetweenPoints(startPoint: Point, endPoint: Point) {
	const lengthX: number = startPoint.x - endPoint.x;
	const lengthY: number = startPoint.y - endPoint.y;
	return Math.pow(lengthX * lengthX + lengthY * lengthY, 0.5);
}

export {LineSegment, getLengthBetweenPoints}
