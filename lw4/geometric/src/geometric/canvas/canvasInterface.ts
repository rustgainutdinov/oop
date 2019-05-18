import {Point} from "../shape/point";

interface CanvasInterface {
	drawLine(from: Point, to: Point, color?: number): void;
	
	fillPolygon(points: Array<Point>, fillColor?: number): void;
	
	drawCircle(center: Point, radius: number, color?: number): void;
	
	fillCircle(center: Point, radius: number, fillColor?: number): void;
}

export {CanvasInterface}
