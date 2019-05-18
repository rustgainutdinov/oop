class Point {
	readonly x: number;
	readonly y: number;
	
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

function checkPointsForEquality(p1: Point, p2: Point): boolean {
	return p1.x === p2.x && p1.y === p2.y
}

function recalculateCoordinateForDrawing(point: Point, leftTop: Point): Point {
	return new Point(point.x - leftTop.x, leftTop.y - point.y);
}

export {Point, checkPointsForEquality, recalculateCoordinateForDrawing}
