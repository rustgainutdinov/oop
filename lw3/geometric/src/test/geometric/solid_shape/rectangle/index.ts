import {Rectangle} from "../../../../geometric/shape/solid_shape/rectangle";
import {checkPointsForEquality, Point} from "../../../../geometric/point";
import {GeometricError} from "../../../../geometric/error";
import {getColorNumberFromString} from "../../../../geometric/color";

const assert = require('assert');

function testRectangleClass() {
	it('Should create rectangle with left top (0, 1) and right bottom (1, 0)', () => {
		const leftTop = new Point(0, 1);
		const rightBottom = new Point(1, 0);
		const rectangle = new Rectangle(leftTop, rightBottom);
		assert(checkPointsForEquality(rectangle.getLeftTop(), leftTop));
		assert(checkPointsForEquality(rectangle.getRightBottom(), rightBottom));
	});
	
	const rectangles = [
		{lt: new Point(-1, 1), rb: new Point(1, -1), area: 4, perimeter: 8, w: 2, h: 2},
		{lt: new Point(2, 3), rb: new Point(5, 2), area: 3, perimeter: 8, w: 3, h: 1},
		{lt: new Point(-1, -1), rb: new Point(5, -8), area: 42, perimeter: 26, w: 6, h: 7},
		{lt: new Point(-5, 4), rb: new Point(5, -4), area: 80, perimeter: 36, w: 10, h: 8}
	];
	
	it('Should create rectangle with others values', () => {
		rectangles.forEach(item => {
			const rectangle = new Rectangle(item.lt, item.rb);
			assert(checkPointsForEquality(rectangle.getLeftTop(), item.lt));
			assert(checkPointsForEquality(rectangle.getRightBottom(), item.rb));
		})
	});
	
	it('Should not create rectangles if left top point lower or to the right than right bottom else or sides are equal', () => {
		const incorrectRectangles = [
			{lt: new Point(4, 1), rb: new Point(-1, -7)},
			{lt: new Point(5, -1), rb: new Point(8, 9)},
			{lt: new Point(5, 3), rb: new Point(2, 2)},
			{lt: new Point(-1, 1), rb: new Point(-1, -1)},
			{lt: new Point(7, 3), rb: new Point(9, 3)},
			{lt: new Point(7, 7), rb: new Point(7, 7)}
		];
		
		incorrectRectangles.forEach(item => {
			try {
				new Rectangle(item.lt, item.rb);
				throw new Error('created incorrect rectangle')
			} catch (e) {
				if (!(e instanceof GeometricError)) throw e
			}
		});
	});
	
	it('Should get width of rectangle', () => {
		rectangles.forEach(item => {
			const rectangle = new Rectangle(item.lt, item.rb);
			assert(rectangle.getWidth() === item.w)
		})
	});
	
	it('Should get height of rectangle', () => {
		rectangles.forEach(item => {
			const rectangle = new Rectangle(item.lt, item.rb);
			assert(rectangle.getHeight() === item.h)
		})
	});
	
	it('Should get rectangle area', () => {
		rectangles.forEach(item => {
			const rectangle = new Rectangle(item.lt, item.rb);
			assert(rectangle.getArea() === item.area);
		})
	});
	
	it('Should get rectangle perimeter', () => {
		rectangles.forEach(item => {
			const rectangle = new Rectangle(item.lt, item.rb);
			assert(rectangle.getPerimeter() === item.perimeter);
		})
	});
	
	it('Should set and translate outline color to number', () => {
		const colors = ['FFFFFF', 'ABC626'];
		
		colors.forEach(item => {
			const rectangle = new Rectangle(new Point(-1, 1), new Point(1, -1), item);
			assert(rectangle.getOutlineColor() === getColorNumberFromString(item))
		})
	});
	
	it('Should set default black outline color', () => {
		const rectangle = new Rectangle(new Point(-1, 1), new Point(1, -1));
		assert(rectangle.getOutlineColor() === 0);
	});
	
	it('Should set and translate fill color to number', () => {
		const colors = ['FFFFFF', 'ABC626'];
		
		colors.forEach(item => {
			const rectangle = new Rectangle(new Point(-1, 1), new Point(1, -1), '000000', item);
			assert(rectangle.getFillColor() === getColorNumberFromString(item))
		})
	});
	
	it('Should set default black fill color', () => {
		const rectangle = new Rectangle(new Point(-1, 1), new Point(1, -1));
		assert(rectangle.getFillColor() === 0);
	});
	
	it('Should set default shape description', () => {
		const rectangle = new Rectangle(new Point(-1, 1), new Point(1, -1));
		assert(typeof rectangle.toString() === 'string' && rectangle.toString().length !== 0);
	})
}

export {testRectangleClass}
