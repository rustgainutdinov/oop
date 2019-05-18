import {SolidShape} from "./solidShape";
import {Point, recalculateCoordinateForDrawing} from "../point";
import {GeometricError} from "../../error/geomenricError";
import {Canvas} from "../../canvas/canvas";

class Rectangle extends SolidShape {
	private readonly leftTop: Point;
	private readonly rightBottom: Point;
	
	constructor(leftTop: Point, rightBottom: Point, outLineColorStr = '000000', fillColorStr = '000000') {
		super(outLineColorStr, fillColorStr);
		if ((rightBottom.x - leftTop.x) <= 0 || (leftTop.y - rightBottom.y) <= 0) {
			throw new GeometricError('rectangle cannot exist');
		}
		
		this.leftTop = leftTop;
		this.rightBottom = rightBottom;
	}
	
	getLeftTop(): Point {
		return this.leftTop
	}
	
	getRightBottom(): Point {
		return this.rightBottom
	}
	
	getWidth(): number {
		return this.rightBottom.x - this.leftTop.x
	}
	
	getHeight(): number {
		return this.leftTop.y - this.rightBottom.y
	}
	
	getArea(): number {
		return this.getWidth() * this.getHeight()
	}
	
	getPerimeter(): number {
		return (this.getWidth() + this.getHeight()) * 2
	}
	
	getDetailedDescription(): string {
		return `Left top point: (${this.getLeftTop().x},  ${this.getLeftTop().y}),
		right bottom point: (${this.getRightBottom().x},  ${this.getRightBottom().y}),
		width: ${this.getWidth()}, height: ${this.getHeight()}`
	}
	
	getPoints(): Array<Point> {
		return [
			this.getLeftTop(),
			new Point(this.getRightBottom().x, this.getLeftTop().y),
			this.getRightBottom(),
			new Point(this.getLeftTop().x, this.getRightBottom().y),
		];
	}
	
	draw(canvas: Canvas) {
		const points: Array<Point> = this.getPoints().map(item => recalculateCoordinateForDrawing(item, canvas.leftTopPoint));
		const outLinePointsRectangle = new Rectangle(
			new Point(this.getLeftTop().x - 1, this.getLeftTop().y + 1),
			new Point(this.getRightBottom().x + 1, this.getRightBottom().y - 1)
		);
		const outLinePoints = outLinePointsRectangle.getPoints().map(item => recalculateCoordinateForDrawing(item, canvas.leftTopPoint));
		
		canvas.fillPolygon(outLinePoints, this.getOutlineColor());
		canvas.fillPolygon(points, this.getFillColor());
	}
}

export {Rectangle}
