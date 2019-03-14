function multipleElementsByMin(arr) {
	let min = arr ? arr[0] : 0;

	arr.forEach(item => {
		if (item < min) min = item;
	});

	arr = arr.map(item => parseFloat((item * min).toFixed(3)));

	return arr
}

module.exports = {
	multipleElementsByMin
};
