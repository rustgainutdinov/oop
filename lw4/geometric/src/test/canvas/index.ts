import {Canvas, getCoordinatesStrFromArr} from "../../geometric/canvas/canvas";
import {Point} from "../../geometric/shape/point";
import assert from 'assert'
import fs from 'fs';

function testGetCoordinatesStrFromArr() {
	describe('get coordinates str from arr', () => {
		// it('should get coordinates string from array with 1 value', () => {
		// 	const arr = [new Point(9, 8)];
		// 	const str = '9,8';
		// 	assert(str === getCoordinatesStrFromArr(arr));
		// });
		//
		// it('should get coordinates string from array', () => {
		// 	const arr = [new Point(2, 5), new Point(4, 0)];
		// 	const str = '2,5,4,0';
		// 	assert(str === getCoordinatesStrFromArr(arr));
		// })
	});
}

function testClassCanvas() {
	describe('canvas class', () => {
		it('should create svg image', () => {
			const canvas = new Canvas(new Point(0, 100), new Point(100, 0));
			canvas.drawLine(new Point(30, 30), new Point(70, 70));
			canvas.drawCircle(new Point(30, 30), 20, '#333FFF');
			fs.writeFileSync('test.svg', canvas.getHtml());
		})
	})
}

export {testGetCoordinatesStrFromArr, testClassCanvas}
