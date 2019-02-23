const fs = require('fs');

function errHandler(err) {
	console.log(err.message);
}

function returnMatrixFromList(matrixList) {
	var matrix = [];
	for (var i = 0; i < 3; i++) {
		matrix.push([]);
		for (var j = 0; j < 3; j++) {
			matrix[i][j] = Number(matrixList[i * 3 + j]);
		}
	}
	return matrix
}

function getDetMatrix(matrix) {
	return (
		matrix[0][0] * matrix[1][1] * matrix[2][2] +
		matrix[1][0] * matrix[0][2] * matrix[2][1] +
		matrix[0][1] * matrix[1][2] * matrix[2][0] -
		matrix[2][0] * matrix[1][1] * matrix[0][2] -
		matrix[0][0] * matrix[1][2] * matrix[2][1] -
		matrix[2][2] * matrix[0][1] * matrix[1][0]
	)
}

function findInverseMatrix(matrix) {
	const det = getDetMatrix(matrix);
	var inverseMatrix = [];
	if (det === 0) {
		throw new Error('Inverse matrix could not be found');
	}
	for (var i = 0; i < 3; i++) {
		inverseMatrix.push([]);
		for (var j = 0; j < 3; j++) {
			var tempArray = JSON.parse(JSON.stringify(matrix));
			tempArray.splice(j, 1);
			tempArray = tempArray.map(item => {
				item.splice(i, 1);
				return item
			});
			inverseMatrix[i][j] = Number((Math.pow(-1, i + j) * (tempArray[0][0] * tempArray[1][1] - tempArray[0][1] * tempArray[1][0]) / det).toFixed(3));
		}
	}
	return inverseMatrix
}

function printMatrix(inverseMatrix) {
	for (var i = 0; i < 3; i++) {
		var str = '';
		for (var j = 0; j < 3; j++) {
			str += inverseMatrix[i][j] + (j !== 2 ? '\t' : '');
		}
		console.log(str)
	}
}

if (process.argv.length !== 3) {
	const errMsg = 'Invalid argument count \nUsage: ./replace <matrix file1>';
	errHandler(new Error(errMsg));
	process.exit();
}

const pathToFile = process.argv[2];
fs.readFile(pathToFile, (err, data) => {
	if (err) return errHandler(err);
	try {
		const defaultMatrixList = data.toString().split(/[\t\n]/g);
		const matrix = returnMatrixFromList(defaultMatrixList);
		const inverseMatrix = findInverseMatrix(matrix);
		printMatrix(inverseMatrix);
	} catch (e) {
		errHandler(e)
	}
});

