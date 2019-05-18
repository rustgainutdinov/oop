import {Triangle} from "../../../../geometric/shape/solidShape/triangle";
import {Point} from "../../../../geometric/shape/point";
import {GeometricError} from "../../../../geometric/error/geomenricError";
import {checkForEquality} from "../../../methods";
import {getColorNumberFromString} from "../../../../geometric/color";
import {Canvas} from "../../../../geometric/canvas/canvas";
import fs from "fs";

const assert = require('assert');

function testTriangleClass() {
	describe('Triangle class', () => {
		const triangles = [
			{vertex1: new Point(3, 4), vertex2: new Point(0, 4), vertex3: new Point(5, 2), area: 3, perimeter: 11.21359193},
			{
				vertex1: new Point(8, -11),
				vertex2: new Point(3, 3),
				vertex3: new Point(5, 7),
				area: 24,
				perimeter: 37.58649229
			},
			{vertex1: new Point(2, 2), vertex2: new Point(0, 8), vertex3: new Point(3, 3), area: 4, perimeter: 13.56972078}
		];
		
		it('Should create triangle with vertexes: (0, 0), (0, 4), (3, 0)', () => {
			const vertex1 = new Point(0, 0);
			const vertex2 = new Point(0, 4);
			const vertex3 = new Point(3, 0);
			const triangle = new Triangle(vertex1, vertex2, vertex3);
			assert(checkForEquality(triangle.getVertex1(), vertex1));
			assert(checkForEquality(triangle.getVertex2(), vertex2));
			assert(checkForEquality(triangle.getVertex3(), vertex3));
		});
		
		it('Should create triangle with others vertexes', () => {
			
			triangles.forEach(item => {
				const triangle = new Triangle(item.vertex1, item.vertex2, item.vertex3);
				assert(checkForEquality(triangle.getVertex1(), item.vertex1));
				assert(checkForEquality(triangle.getVertex2(), item.vertex2));
				assert(checkForEquality(triangle.getVertex3(), item.vertex3));
			})
		});
		
		it('Should not create triangle if at least two points are the same', () => {
			const triangles = [
				{vertex1: new Point(0, 0), vertex2: new Point(0, 0), vertex3: new Point(3, 5)},
				{vertex1: new Point(5, 2), vertex2: new Point(3, 3), vertex3: new Point(3, 3)},
				{vertex1: new Point(2, 2), vertex2: new Point(0, 0), vertex3: new Point(2, 2)}
			];
			
			triangles.forEach(item => {
				try {
					new Triangle(item.vertex1, item.vertex2, item.vertex3);
					throw new Error('Triangle created with the same points')
				} catch (e) {
					if (!(e instanceof GeometricError)) throw e;
				}
			})
		});
		
		it('Should get triangle perimeter', () => {
			triangles.forEach(item => {
				const triangle = new Triangle(item.vertex1, item.vertex2, item.vertex3);
				assert(Math.abs(Math.round((triangle.getPerimeter() - item.perimeter) * 1000) / 1000) === 0);
			})
		});
		
		it('Should get triangle area', () => {
			
			triangles.forEach(item => {
				const triangle = new Triangle(item.vertex1, item.vertex2, item.vertex3);
				assert(Math.abs(Math.round((triangle.getArea() - item.area) * 1000) / 1000) === 0);
			})
		});
		
		it('Should set and translate outline color to number', () => {
			const colors = ['FFFFFF', 'ABC626'];
			
			colors.forEach(item => {
				const triangle = new Triangle(new Point(0, 1), new Point(1, 1), new Point(4, 3), item);
				assert(triangle.getOutlineColor() === getColorNumberFromString(item))
			})
		});
		
		it('Should set default black outline color', () => {
			const triangle = new Triangle(new Point(4, 5), new Point(9, 6), new Point(4, 3));
			assert(triangle.getOutlineColor() === 0);
		});
		
		it('Should set and translate fill color to number', () => {
			const colors = ['FFFFFF', 'ABC626'];
			
			colors.forEach(item => {
				const triangle = new Triangle(new Point(0, 1), new Point(1, 1), new Point(4, 3), '000000', item);
				assert(triangle.getFillColor() === getColorNumberFromString(item))
			})
		});
		
		it('Should set default black fill color', () => {
			const triangle = new Triangle(new Point(4, 5), new Point(9, 6), new Point(4, 3));
			assert(triangle.getFillColor() === 0);
		});
		
		it('Should set default shape description', () => {
			const triangle = new Triangle(new Point(4, 5), new Point(9, 6), new Point(4, 3));
			assert(typeof triangle.toString() === 'string' && triangle.toString().length !== 0);
		});
		
		it('should draw triangle', () => {
			const canvas = new Canvas(new Point(0, 20), new Point(20, -20));
			const triangle = new Triangle(new Point(1, 15), new Point(18, 0), new Point(4, -15), 'FFF000', '333555');
			triangle.draw(canvas);
			fs.writeFileSync('test3.svg', canvas.getHtml());
		});
	});
}

export {testTriangleClass}
