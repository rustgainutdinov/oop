import {SolidShape} from "./solidShape";
import {Point} from "../point";
import {GeometricError} from "../../error/geomenricError";

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
}

export {Rectangle}
