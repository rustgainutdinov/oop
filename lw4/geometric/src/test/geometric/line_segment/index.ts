import {getLengthBetweenPoints, LineSegment} from "../../../geometric/shape/lineSegment";
import {Point} from "../../../geometric/shape/point";
import {checkForEquality} from "../../methods";
import {GeometricError} from "../../../geometric/error/geomenricError";
import {getColorNumberFromString} from "../../../geometric/color";

const assert = require('assert');

const lines = [
	{start: new Point(0, 1), end: new Point(0, 2), perimeter: 1},
	{start: new Point(-3, 6), end: new Point(-1, 7), perimeter: 2.2360679774998},
	{start: new Point(-7, -3), end: new Point(-6, -2), perimeter: 1.4142135623731},
	{start: new Point(1, 1), end: new Point(0, -2), perimeter: 3.1622776601684},
	{start: new Point(-3, 1), end: new Point(0, -4), perimeter: 5.8309518948453},
	{start: new Point(8, -11), end: new Point(0, 20), perimeter: 32.015621187164}
];

function testGetLengthBetweenPoints() {
	describe('Get length between points', () => {
		it('Should get length between points', () => {
			lines.forEach(item => {
				assert(Math.round((getLengthBetweenPoints(item.start, item.end) - item.perimeter) * 1000) === 0);
			});
		})
	});
}

function testClassLineSegment() {
	describe('Line Segment class', () => {
		it('Should create line with start point(0, 0) and end point (0, 1)', () => {
			const startPoint = new Point(0, 0);
			const endPoint = new Point(0, 1);
			const line = new LineSegment(startPoint, endPoint);
			assert(checkForEquality(line.getStartPoint(), startPoint));
			assert(checkForEquality(line.getEndPoint(), endPoint));
		});
		
		it('Should create lines and get start and end points', () => {
			lines.forEach(item => {
				const line = new LineSegment(item.start, item.end);
				assert(checkForEquality(line.getStartPoint(), item.start));
				assert(checkForEquality(line.getEndPoint(), item.end));
			});
		});
		
		it('Should not create line if points are the same', () => {
			const incorrectLines = [
				{start: new Point(1, 1), end: new Point(1, 1)},
				{start: new Point(-2, -51), end: new Point(-2, -51)},
				{start: new Point(-8, 1), end: new Point(-8, 1)}
			];
			
			incorrectLines.forEach(item => {
				try {
					const line = new LineSegment(item.start, item.end);
					throw new Error('created line with the same points');
				} catch (e) {
					if (!(e instanceof GeometricError)) throw e;
				}
			});
		});
		
		it('Should get lines area', () => {
			lines.forEach(item => {
				const line = new LineSegment(item.start, item.end);
				assert(line.getArea() === 0);
			});
		});
		
		it('Should get line perimeter', () => {
			lines.forEach(item => {
				const line = new LineSegment(item.start, item.end);
				assert(Math.round((line.getPerimeter() - item.perimeter) * 1000) === 0);
			});
		});
		
		it('Should set and translate outline color to number', () => {
			const colors = ['FFFFFF', 'ABC626'];
			
			colors.forEach(item => {
				const line = new LineSegment(new Point(0, 1), new Point(1, 1), item);
				assert(line.getOutlineColor() === getColorNumberFromString(item))
			})
		});
		
		it('Should set default black outline color', () => {
			const line = new LineSegment(new Point(4, 5), new Point(9, 6));
			assert(line.getOutlineColor() === 0);
		});
		
		it('Should set default shape description', () => {
			const line = new LineSegment(new Point(4, 5), new Point(9, 6), '000000');
			assert(typeof line.toString() === 'string' && line.toString().length !== 0);
		})
	});
}

export {testClassLineSegment, testGetLengthBetweenPoints}
