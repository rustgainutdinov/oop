// @ts-ignore
import window = require('svgdom');
import {getColorHexStringFromNumber} from "../color";
import {CanvasInterface} from "./canvasInterface";
import {Point} from "../shape/point";

const SVG = require('svg.js')(window);
const document = window.document;

function getCoordinatesStrFromArr(points: Array<Point>): Array<number> {
	let pointsArr: Array<number> = [];
	points.forEach((point: Point, i) => {
		pointsArr.push(point.x);
		pointsArr.push(point.y);
	});
	
	return pointsArr
}

class Canvas implements CanvasInterface {
	private canvas: any;
	readonly leftTopPoint: Point;
	readonly rightBottomPoint: Point;
	
	constructor(leftTopPoint: Point, rightBottomPoint: Point) {
		leftTopPoint = new Point(leftTopPoint.x - 1, leftTopPoint.y + 1);
		rightBottomPoint = new Point(rightBottomPoint.x + 1, rightBottomPoint.y - 1);
		this.leftTopPoint = leftTopPoint;
		this.rightBottomPoint = rightBottomPoint;
		this.canvas = SVG(document.documentElement)
			.size(rightBottomPoint.x - leftTopPoint.x, leftTopPoint.y - rightBottomPoint.y);
	}
	
	drawLine(from: Point, to: Point, color = 0x0): any {
		this.canvas.line(getCoordinatesStrFromArr([from, to])).stroke({
			color: '#' + getColorHexStringFromNumber(color),
			width: 1
		});
	}
	
	fillPolygon(points: Array<Point>, fillColor = 0x0): any {
		this.canvas.polygon(getCoordinatesStrFromArr(points)).fill('#' + getColorHexStringFromNumber(fillColor));
	}
	
	drawCircle(center: Point, radius: number, color = 0x0): any {
		this.fillCircle(new Point(center.x, center.y), radius + 1, color);
		this.fillCircle(center, radius, 0xFFFFFF);
	}
	
	fillCircle(center: Point, radius: number, fillColor = 0x0): any {
		this.canvas.circle(radius * 2).fill('#' + getColorHexStringFromNumber(fillColor)).move((center.x - radius), (center.y - radius));
	}
	
	getHtml() {
		return this.canvas.node.outerHTML
	}
}

export {getCoordinatesStrFromArr, Canvas}
