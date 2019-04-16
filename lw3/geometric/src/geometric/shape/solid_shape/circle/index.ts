import {SolidShape} from "../index";
import {Point} from "../../../point";
import {GeometricError} from "../../../error";
import {getColorNumberFromString} from "../../../color";

class Circle implements SolidShape {
	private readonly center: Point;
	private readonly radius: number;
	private readonly outLineColor: number;
	private readonly fillColor: number;
	
	constructor(center: Point, radius: number, outLineColorStr = '000000', fillColorStr = '000000') {
		if (radius <= 0) throw new GeometricError('radius is lower than 0 or equal to 0');
		this.center = center;
		this.radius = radius;
		this.outLineColor = getColorNumberFromString(outLineColorStr);
		this.fillColor = getColorNumberFromString(fillColorStr);
	}
	
	
	getArea(): number {
		return Math.PI * this.radius * this.radius
	}
	
	getPerimeter(): number {
		return Math.PI * this.radius * 2
	}
	
	getOutlineColor(): number {
		return this.outLineColor
	}
	
	getFillColor(): number {
		return this.fillColor
	}
	
	toString(): string {
		return `Center: (${this.getCenter().x}, ${this.getCenter().y}), radius: ${this.getRadius()}`
	}
	
	getCenter(): Point {
		return this.center
	}
	
	getRadius(): number {
		return this.radius
	}
}

export {Circle}
