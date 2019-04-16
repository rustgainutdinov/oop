import {Circle} from "../../../../geometric/shape/solid_shape/circle";
import {checkPointsForEquality, Point} from "../../../../geometric/point";
import assert from 'assert'
import {GeometricError} from "../../../../geometric/error";
import {getColorNumberFromString} from "../../../../geometric/color";

function testCircleClass() {
	it('Should create new circle with center in (0, 0) and radius = 0.5', () => {
		const center = new Point(0, 0);
		const radius = 0.5;
		const circle = new Circle(center, radius);
		assert(checkPointsForEquality(circle.getCenter(), center));
		assert(circle.getRadius() === radius);
	});
	
	const circles = [
		{center: new Point(0, 0), radius: 1, area: Math.PI, perimeter: Math.PI * 2},
		{center: new Point(5, 5), radius: 9, area: Math.PI * 9 * 9, perimeter: Math.PI * 18},
		{center: new Point(-3, 0), radius: 4, area: Math.PI * 4 * 4, perimeter: Math.PI * 8},
		{center: new Point(4, -5), radius: 2, area: Math.PI * 2 * 2, perimeter: Math.PI * 4},
	];
	
	it('Should create circle with other initial data', () => {
		circles.forEach(item => {
			const circle = new Circle(item.center, item.radius);
			assert(checkPointsForEquality(circle.getCenter(), item.center));
			assert(circle.getRadius() === item.radius);
		})
	});
	
	it('Should check radius to be more than 0', () => {
		const incorrectCircles = [
			{center: new Point(0, 0), radius: 0},
			{center: new Point(2, 4), radius: -1}
		];
		
		incorrectCircles.forEach(item => {
			try {
				new Circle(item.center, item.radius);
				throw new Error('circle created with incorrect radius');
			} catch (e) {
				if (!(e instanceof GeometricError)) throw e
			}
		})
	});
	
	it('Should get circle area', () => {
		circles.forEach(item => {
			const circle = new Circle(item.center, item.radius);
			assert(Math.round((circle.getArea() - item.area) * 1000) / 1000 === 0)
		})
	});
	
	it('Should get circle perimeter', () => {
		circles.forEach(item => {
			const circle = new Circle(item.center, item.radius);
			assert(Math.round((circle.getPerimeter() - item.perimeter) * 1000) / 1000 === 0)
		})
	});
	
	it('Should set and translate outline color to number', () => {
		const colors = ['FFFFFF', 'ABC626'];
		
		colors.forEach(item => {
			const circle = new Circle(new Point(-1, 1), 5, item);
			assert(circle.getOutlineColor() === getColorNumberFromString(item))
		})
	});
	
	it('Should set default black outline color', () => {
		const circle = new Circle(new Point(-1, 1), 5);
		assert(circle.getOutlineColor() === 0);
	});
	
	it('Should set and translate fill color to number', () => {
		const colors = ['FFFFFF', 'ABC626'];
		
		colors.forEach(item => {
			const circle = new Circle(new Point(-1, 1), 5, '000000', item);
			assert(circle.getFillColor() === getColorNumberFromString(item))
		})
	});
	
	it('Should set default black fill color', () => {
		const circle = new Circle(new Point(-1, 1), 5);
		assert(circle.getFillColor() === 0);
	});
	
	it('Should set default shape description', () => {
		const circle = new Circle(new Point(-1, 1), 5);
		assert(typeof circle.toString() === 'string' && circle.toString().length !== 0);
	})
}

export {testCircleClass}
