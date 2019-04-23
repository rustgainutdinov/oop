import {Shape} from "../Shape";
import {getColorNumberFromString} from "../../color";


abstract class SolidShape extends Shape {
	private readonly fillColor: number;
	
	protected constructor(outLineColorStr = '000000', fillColor = '000000') {
		super(outLineColorStr);
		this.fillColor = getColorNumberFromString(fillColor);
	}
	
	toString(): string {
		return `Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}, outline color: ${this.getOutlineColor()}, fill color: ${this.getFillColor()}
		${this.getDetailedDescription()}`
	}
	
	getFillColor(): number {
		return this.fillColor
	}
}

export {SolidShape}
