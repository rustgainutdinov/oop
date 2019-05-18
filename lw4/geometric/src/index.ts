import {createShape} from './modules/create_shape'
import {getShapesPointsArr, searchBorderlinePointOfPointsArr, searchShape} from "./modules/searchMethods";
import {Shape} from "./geometric/shape/shape";
// @ts-ignore
import readline from "readline-sync";
import {Point} from "./geometric/shape/point";
import {Canvas} from "./geometric/canvas/canvas";
import {CanvasDrawable} from "./geometric/canvas/canvasDrawable";
import fs from 'fs'

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


function showShape(shape: Shape | null) {
	if (shape) {
		console.log(shape.toString())
	} else {
		console.log(null)
	}
}

function getLeftTopPoint(a: Point, b: Point): Point {
	return new Point(a.x > b.x ? b.x : a.x, a.y < b.y ? b.y : a.y)
}

function getRightBottomPoint(a: Point, b: Point): Point {
	return new Point(a.x < b.x ? b.x : a.x, a.y > b.y ? b.y : a.y)
}

function getShapeWithTheLargestArea(a: Shape, b: Shape) {
	return a.getArea() < b.getArea()
}

function getShapeWithTheSmallestPerimeter(a: Shape, b: Shape) {
	return a.getPerimeter() > b.getPerimeter()
}

function main() {
	const shapesArray: Array<Shape> = askShapes();
	console.log('\nShape with the largest area: ');
	showShape(searchShape(shapesArray, getShapeWithTheLargestArea));
	console.log('\nShape with the smallest perimeter: ');
	showShape(searchShape(shapesArray, getShapeWithTheSmallestPerimeter));
	const points = getShapesPointsArr(shapesArray);
	const leftTopPoint: Point | undefined = searchBorderlinePointOfPointsArr(points, getLeftTopPoint);
	const rightBottomPoint: Point | undefined = searchBorderlinePointOfPointsArr(points, getRightBottomPoint);
	if (leftTopPoint && rightBottomPoint) {
		const canvas = new Canvas(leftTopPoint, rightBottomPoint);
		const shapesArrayDrawable: Array<CanvasDrawable> = shapesArray;
		shapesArrayDrawable.forEach(shape => {
			shape.draw(canvas);
		});
		fs.writeFileSync('result.svg', canvas.getHtml());
	}
}

main();
