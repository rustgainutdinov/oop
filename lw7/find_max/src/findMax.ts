import MaxValue from './MaxValue'

function findMax<T>(arr: Array<T>, maxValue: MaxValue<T>): boolean {
	if (arr.length === 0) return false;
	
	maxValue.value = arr[0];
	arr.forEach((value: T) => {
		if (maxValue.value && value > maxValue.value) {
			maxValue.value = value
		}
	});
	return true;
}

export default findMax;
