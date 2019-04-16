import {SolidShape} from "./geometric/shape/solid_shape";
import {LineSegment} from "./geometric/shape/line_segment";
import {Triangle} from "./geometric/shape/solid_shape/triangle";
import {Rectangle} from "./geometric/shape/solid_shape/rectangle";
import {Circle} from "./geometric/shape/solid_shape/circle";
import {Point} from "./geometric/point";
import {Shape} from "./geometric/shape";

const readline = require('readline-sync');

function askShapes(): Array<Shape> {
	let shapesArray: Array<Shape> = [];
	while (true) {
		const shapeData = readline.question('Shape: ').trim().split(' ');
		let shape: any;
		try {
			if (shapeData[0] === 'line') {
				shape = new LineSegment(
					new Point(+shapeData[1], +shapeData[2]),
					new Point(+shapeData[3], +shapeData[4]),
					shapeData[5]
				);
			} else if (shapeData[0] === 'triangle') {
				shape = new Triangle(
					new Point(+shapeData[1], +shapeData[2]),
					new Point(+shapeData[3], +shapeData[4]),
					new Point(+shapeData[6], +shapeData[6]),
					shapeData[7], shapeData[8]
				);
			} else if (shapeData[0] === 'rectangle') {
				shape = new Rectangle(
					new Point(+shapeData[1], +shapeData[2]),
					new Point(+shapeData[3], +shapeData[4]),
					shapeData[5], shapeData[6]
				);
			} else if (shapeData[0] === 'circle') {
				shape = new Circle(
					new Point(+shapeData[1], +shapeData[2]), shapeData[3],
					shapeData[4], shapeData[5]
				);
			} else if (shapeData[0] === '...') {
				break;
			} else {
				const answer: string = readline.question('Do you watn to exit?(y/n): ');
				if (answer.toLowerCase() === 'y') {
					break;
				}
				continue;
			}
		} catch (e) {
			console.log(e.message)
			continue;
		}
		
		shapesArray.push(shape);
	}
	return shapesArray
}

function searchShapeWithTheLargestArea(shapesArray: Array<Shape>): Shape {
	let shape = shapesArray[0];
	shapesArray.forEach(item => {
		if (item.getArea() > shape.getArea()) {
			shape = item
		}
	});
	
	return shape
}

function searchShapeWithTheSmallestPerimeter(shapesArray: Array<Shape>): Shape {
	let shape = shapesArray[0];
	shapesArray.forEach(item => {
		if (item.getPerimeter() < shape.getPerimeter()) {
			shape = item
		}
	});
	
	return shape
}

function showShape(shape: Shape) {
	console.log('Area: ' + shape.getArea());
	console.log('Perimeter: ' + shape.getPerimeter());
	console.log('Out line color: ' + shape.getOutlineColor());
	if ('getFillColor' in shape) {
		console.log('Fill color: ' + (shape as SolidShape).getFillColor());
	}
	console.log('Individual data: ' + shape.toString());
}

const shapesArray: Array<Shape> = askShapes();
if (shapesArray.length > 0) {
	const shapeWithTheLargesArea: Shape = searchShapeWithTheLargestArea(shapesArray);
	const shapeWithTheSmallestPerimeter: Shape = searchShapeWithTheSmallestPerimeter(shapesArray);
	console.log('\nShape with the largest area: ');
	showShape(shapeWithTheLargesArea);
	console.log('\nShape with the smallest perimeter: ');
	showShape(shapeWithTheSmallestPerimeter);
}
