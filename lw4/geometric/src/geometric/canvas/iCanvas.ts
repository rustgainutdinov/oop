import {Point} from "../shape/point";

interface ICanvas {
	drawLine(from: Point, to: Point, color?: string): any;
	
	fillPolygon(points: Array<Point>, fillColor?: string): any;
	
	drawCircle(center: Point, radius: number, color?: string): any;
	
	fillCircle(center: Point, radius: number, fillColor?: string): any;
}

export {ICanvas}
