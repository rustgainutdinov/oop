import {SolidShape} from "../index";
import {Point} from "../../../point";
import {GeometricError} from "../../../error";
import {getColorNumberFromString} from "../../../color";

class Rectangle implements SolidShape {
	private readonly leftTop: Point;
	private readonly rightBottom: Point;
	private readonly outLineColor: number;
	private readonly fillColor: number;
	
	constructor(leftTop: Point, rightBottom: Point, outLineColorStr = '000000', fillColorStr = '000000') {
		if ((rightBottom.x - leftTop.x) <= 0 || (leftTop.y - rightBottom.y) <= 0) {
			throw new GeometricError('rectangle cannot exist');
		}
		
		this.outLineColor = getColorNumberFromString(outLineColorStr);
		this.fillColor = getColorNumberFromString(fillColorStr);
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
	
	getOutlineColor(): number {
		return this.outLineColor
	}
	
	getFillColor(): number {
		return this.fillColor
	}
	
	toString(): string {
		return `Left top point: (${this.getLeftTop().x},  ${this.getLeftTop().y}),
		right bottom point: (${this.getRightBottom().x},  ${this.getRightBottom().y}),
		width: ${this.getWidth()}, height: ${this.getHeight()}`
	}
}

export {Rectangle}
