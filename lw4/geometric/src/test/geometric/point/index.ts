import {checkPointsForEquality, Point} from "../../../geometric/shape/point";

const assert = require('assert');

function testPointClass() {
	describe('Point class', () => {
		it('Should create point with x and y properties', () => {
			const points = [
				[0, 0],
				[1, 5],
				[-2, 6],
				[3, -3],
				[-9, -9]
			];
			
			points.forEach(item => {
				const point = new Point(item[0], item[1]);
				assert(point.x === item[0]);
				assert(point.y === item[1]);
			});
		})
	});
}

function testCheckPointsForEqualityFunction() {
	describe('Check points for equality function', () => {
		it('Should return true if points are the same', () => {
			assert(checkPointsForEquality(new Point(0, 1), new Point(0, 1)) === true);
			assert(checkPointsForEquality(new Point(-1, 9), new Point(-1, 9)) === true);
		});
		it('Should return false if points are not the same', () => {
			assert(checkPointsForEquality(new Point(0, 1), new Point(1, 0)) === false);
			assert(checkPointsForEquality(new Point(8, 5), new Point(-1, 9)) === false);
		})
	});
}

export {testPointClass, testCheckPointsForEqualityFunction}
