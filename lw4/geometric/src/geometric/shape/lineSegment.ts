import {Shape} from "./shape";
import {Point, recalculateCoordinateForDrawing} from "./point";
import {GeometricError} from "../error/geomenricError";
import {Canvas} from "../canvas/canvas";

class LineSegment extends Shape {
	private readonly startPoint: Point;
	private readonly endPoint: Point;
	
	constructor(startPoint: Point, endPoint: Point, outLineColorStr = '000000') {
		if (startPoint.x === endPoint.x && startPoint.y === endPoint.y) {
			throw new GeometricError('Creation line with the same points is impossible');
		}
		
		super(outLineColorStr);
		
		this.startPoint = startPoint;
		this.endPoint = endPoint;
	}
	
	getArea(): number {
		return 0
	}
	
	getPerimeter(): number {
		return getLengthBetweenPoints(this.startPoint, this.endPoint)
	}
	
	getDetailedDescription(): string {
		return `Start point: (${this.getStartPoint().x}, ${this.getStartPoint().y}),
		end point: (${this.getEndPoint().x}, ${this.getEndPoint().y})`
	}
	
	getStartPoint(): Point {
		return this.startPoint
	}
	
	getEndPoint(): Point {
		return this.endPoint
	}
	
	draw(canvas: Canvas): void {
		canvas.drawLine(recalculateCoordinateForDrawing(this.getStartPoint(), canvas.leftTopPoint), recalculateCoordinateForDrawing(this.getEndPoint(), canvas.leftTopPoint), this.getOutlineColor())
	}
}

function getLengthBetweenPoints(startPoint: Point, endPoint: Point) {
	const lengthX: number = startPoint.x - endPoint.x;
	const lengthY: number = startPoint.y - endPoint.y;
	return Math.pow(lengthX * lengthX + lengthY * lengthY, 0.5);
}

export {LineSegment, getLengthBetweenPoints}
