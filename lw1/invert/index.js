const fs = require('fs');

function errHandler(err) {
	console.log(err.message);
	process.exit(1);
}

function readMatrixFromFile(pathToFile) {
	const fileData = fs.readFileSync(pathToFile).toString().split(/[\t\n]/g);
	var matrix = [];
	for (var i = 0; i < 3; i++) {
		matrix.push([]);
		for (var j = 0; j < 3; j++) {
			matrix[i][j] = Number(fileData[i * 3 + j]);
		}
	}
	return matrix
}

function getDeterminant(matrix) {
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
	const det = getDeterminant(matrix);
	var inverseMatrix = [];
	if (det === 0) {
		throw new Error('Inverse matrix could not be found');
	}
	for (var i = 0; i < 3; i++) {
		inverseMatrix.push([]);
		for (var j = 0; j < 3; j++) {
			var algebraicAdditionMatrix = [];
			matrix.forEach((item, k) => {
				if (k !== j) {
					algebraicAdditionMatrix.push(item.filter((_, p) => {
						return p !== i
					}))
				}
			});
			inverseMatrix[i][j] = Number(
				(
					(((i + j) % 2) === 0 ? 1 : -1) *
					(
						algebraicAdditionMatrix[0][0] * algebraicAdditionMatrix[1][1] -
						algebraicAdditionMatrix[0][1] * algebraicAdditionMatrix[1][0]
					) / det
				)
				.toFixed(3));
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
}

const pathToFile = process.argv[2];


try {
	const matrix = readMatrixFromFile(pathToFile);
	const inverseMatrix = findInverseMatrix(matrix);
	printMatrix(inverseMatrix);
} catch (e) {
	errHandler(e)
}

