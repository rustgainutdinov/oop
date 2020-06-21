import findMax from './findMax'
import MaxValue from './MaxValue'

let maxValue = new MaxValue();
let numArr = [9, 8, 3, 6, 10, 673, 0, -39];
let charArr = ['AAA', 'ZZZ'];
console.log('Max value is:');
if (findMax(charArr, maxValue)) {
	console.log(maxValue.value)
} else {
	console.log('not found')
}
