import {Canvas, getCoordinatesStrFromArr} from "../../geometric/canvas/canvas";
import {Point} from "../../geometric/shape/point";
import fs from 'fs';
import assert from 'assert'

function testGetCoordinatesStrFromArr() {
	describe('get coordinates str from arr', () => {
		it('should get coordinates string from array', () => {
			const arr = [new Point(2, 5), new Point(4, 0)];
			const correctArr = [2, 5, 4, 0];
			getCoordinatesStrFromArr(arr).forEach((item, i) => {
				assert(item === correctArr[i])
			})
		})
	});
}

function testClassCanvas() {
	describe('canvas class', () => {
		it('should create svg image', () => {
			const canvas = new Canvas(new Point(0, 10), new Point(10, 0));
			canvas.drawLine(new Point(5, 5), new Point(7, 7), 0x2125ff);
			canvas.drawCircle(new Point(5, 5), 4, 0xff3526);
			canvas.fillCircle(new Point(5, 5), 4, 0xFFF000);
			canvas.fillPolygon([new Point(3, 5), new Point(9, 9), new Point(1, 1)], 0xAAAAAA);
			fs.writeFileSync('test.svg', canvas.getHtml());
		})
	})
}

export {testGetCoordinatesStrFromArr, testClassCanvas}
