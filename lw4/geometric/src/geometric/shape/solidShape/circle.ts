import {SolidShape} from "./solidShape";
import {Point, recalculateCoordinateForDrawing} from "../point";
import {GeometricError} from "../../error/geomenricError";
import {Canvas} from "../../canvas/canvas";

class Circle extends SolidShape {
	private readonly center: Point;
	private readonly radius: number;
	
	constructor(center: Point, radius: number, outLineColorStr = '000000', fillColorStr = '000000') {
		super(outLineColorStr, fillColorStr);
		if (radius <= 0) throw new GeometricError('radius is lower than 0 or equal to 0');
		this.center = center;
		this.radius = radius;
	}
	
	
	getArea(): number {
		return Math.PI * this.radius * this.radius
	}
	
	getPerimeter(): number {
		return Math.PI * this.radius * 2
	}
	
	getDetailedDescription(): string {
		return `Center: (${this.getCenter().x}, ${this.getCenter().y}), radius: ${this.getRadius()}`
	}
	
	getCenter(): Point {
		return this.center
	}
	
	getRadius(): number {
		return this.radius
	}
	
	draw(canvas: Canvas): void {
		canvas.drawCircle(recalculateCoordinateForDrawing(this.center, canvas.leftTopPoint), this.radius, this.getOutlineColor());
		canvas.fillCircle(recalculateCoordinateForDrawing(this.center, canvas.leftTopPoint), this.radius, this.getFillColor());
	}
}

export {Circle}
