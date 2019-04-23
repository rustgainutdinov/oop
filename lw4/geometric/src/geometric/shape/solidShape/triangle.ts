import {SolidShape} from "./solidShape";
import {checkPointsForEquality, Point} from "../point";
import {getLengthBetweenPoints} from "../lineSegment";
import {GeometricError} from "../../error/geomenricError";

class Triangle extends SolidShape {
	private readonly vertex1: Point;
	private readonly vertex2: Point;
	private readonly vertex3: Point;
	
	constructor(vertex1: Point, vertex2: Point, vertex3: Point, outLineColorStr = '000000', fillColorStr = '000000') {
		super(outLineColorStr, fillColorStr);
		if (
			checkPointsForEquality(vertex1, vertex2) ||
			checkPointsForEquality(vertex2, vertex3) ||
			checkPointsForEquality(vertex1, vertex3)
		) {
			throw new GeometricError('triangle points are the same');
		}
		this.vertex1 = vertex1;
		this.vertex2 = vertex2;
		this.vertex3 = vertex3;
	}
	
	getPerimeter(): number {
		const side1: number = getLengthBetweenPoints(this.vertex1, this.vertex2);
		const side2: number = getLengthBetweenPoints(this.vertex2, this.vertex3);
		const side3: number = getLengthBetweenPoints(this.vertex1, this.vertex3);
		return side1 + side2 + side3
	}
	
	getArea(): number {
		const side1: number = getLengthBetweenPoints(this.vertex1, this.vertex2);
		const side2: number = getLengthBetweenPoints(this.vertex2, this.vertex3);
		const side3: number = getLengthBetweenPoints(this.vertex1, this.vertex3);
		const semiPerimeter: number = (side1 + side2 + side3) / 2;
		return Math.pow(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3), 0.5);
	}
	
	getDetailedDescription(): string {
		return `Vertex 1: (${this.getVertex1().x}, ${this.getVertex1().y}),
		Vertex 2: (${this.getVertex2().x}, ${this.getVertex2().y}),
		Vertex 3: (${this.getVertex3().x}, ${this.getVertex3().y})`
	}
	
	getVertex1(): Point {
		return this.vertex1
	}
	
	getVertex2(): Point {
		return this.vertex2
	}
	
	getVertex3(): Point {
		return this.vertex3
	}
}

export {Triangle}
