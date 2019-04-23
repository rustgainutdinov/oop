import {createShape} from './modules/create_shape'
import {Shape} from "./geometric/shape/shape";
// @ts-ignore
import readline from "readline-sync";

function askShapes(): Array<Shape> {
	let shapesArray: Array<Shape> = [];
	
	while (true) {
		const shapeDataStr: string = readline.question('Shape: ');
		let shape: any;
		try {
			if (shapeDataStr.indexOf('...') !== -1) {
				break;
			}
			shape = createShape(shapeDataStr);
			if (!shape) {
				throw new Error('Incorrect input');
			}
		} catch (e) {
			console.log(e.message);
			continue;
		}
		shapesArray.push(shape);
	}
	return shapesArray
}

function searchShapeWithTheLargestArea(shapesArray: Array<Shape>): Shape | null {
	if (shapesArray.length < 1) return null;
	let shape = shapesArray[0];
	shapesArray.forEach(item => {
		if (item.getArea() > shape.getArea()) {
			shape = item
		}
	});
	
	return shape
}

function searchShapeWithTheSmallestPerimeter(shapesArray: Array<Shape>): Shape | null {
	if (shapesArray.length < 1) return null;
	let shape = shapesArray[0];
	shapesArray.forEach(item => {
		if (item.getPerimeter() < shape.getPerimeter()) {
			shape = item
		}
	});
	
	return shape
}

function showShape(shape: Shape | null) {
	if (shape) {
		console.log(shape.toString())
	} else {
		console.log(null)
	}
}

function main() {
	const shapesArray: Array<Shape> = askShapes();
	console.log('\nShape with the largest area: ');
	showShape(searchShapeWithTheLargestArea(shapesArray));
	console.log('\nShape with the smallest perimeter: ');
	showShape(searchShapeWithTheSmallestPerimeter(shapesArray));
}

main();
