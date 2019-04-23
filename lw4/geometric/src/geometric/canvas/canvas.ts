// @ts-ignore
import window = require('svgdom');

const SVG = require('svg.js')(window);
const document = window.document;

import {ICanvas} from "./iCanvas";
import {Point} from "../shape/point";

function getCoordinatesStrFromArr(points: Array<Point>): Array<number> {
	let pointsArr: Array<number> = [];
	points.forEach((point: Point, i) => {
		pointsArr.push(point.x);
		pointsArr.push(point.y);
	});
	
	return pointsArr
}

class Canvas implements ICanvas {
	private canvas: any;
	readonly leftTopPoint: Point;
	readonly rightBottomPoint: Point;
	
	constructor(leftTopPoint: Point, rightBottomPoint: Point) {
		this.leftTopPoint = leftTopPoint;
		this.rightBottomPoint = rightBottomPoint;
		this.canvas = SVG(document.documentElement)
			.size(rightBottomPoint.x - leftTopPoint.x, leftTopPoint.y - rightBottomPoint.y);
	}
	
	drawLine(from: Point, to: Point, color?: string): any {
		this.canvas.line(getCoordinatesStrFromArr([from, to])).stroke({
			color: color ? '#' + color : '#000',
			width: 10
		});
	}
	
	fillPolygon(points: Array<Point>, fillColor?: string): any {
		this.canvas.polygon(getCoordinatesStrFromArr(points)).fill(fillColor ? '#' + fillColor : '#000');
	}
	
	drawCircle(center: Point, radius: number, color?: string): any {
		this.canvas.circle(radius).fill(color ? '#' + color : '#000').move((center.x - radius), (center.y - radius));
		this.canvas.circle(radius - 10).fill('#FFFFFF').move((center.x - radius + 5), (center.y - radius + 5));
		// this.canvas.circle(radius).move((center.x - radius - 5) + ',' + (center.y - radius - 5)).fill('#FFF');
	}
	
	fillCircle(center: Point, radius: number, fillColor?: string): any {
		this.canvas.circle(radius).move((center.x - radius) + ',' + (center.y - radius)).fill(fillColor ? '#' + fillColor : '#000');
	}
	
	getHtml() {
		return this.canvas.node.outerHTML
	}
}

export {getCoordinatesStrFromArr, Canvas}
