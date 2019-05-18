import {getColorNumberFromString} from "../color";
import {CanvasDrawable} from "../canvas/canvasDrawable";
import {Canvas} from "../canvas/canvas";

abstract class Shape implements CanvasDrawable {
	private readonly outLineColor: number;
	
	protected constructor(outLineColorStr = '000000') {
		this.outLineColor = getColorNumberFromString(outLineColorStr);
	}
	
	abstract getArea(): number;
	
	abstract getPerimeter(): number;
	
	toString(): string {
		return `Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}, outline color: ${this.getOutlineColor()}
		${this.getDetailedDescription()}`
	}
	
	abstract getDetailedDescription(): string;
	
	getOutlineColor(): number {
		return this.outLineColor
	}
	
	abstract draw(canvas: Canvas): void;
}


export {Shape}
