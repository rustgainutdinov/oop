import {ColorError} from "../error/color";

function getColorNumberFromString(colorStr: string): number {
	const regexp: any = colorStr.match(/[0-9a-f]{6}/ig);
	if (!regexp || regexp[0] !== colorStr) {
		throw new ColorError('Incorrect color');
	}
	return +`0x${colorStr}`
}

function getColorHexStringFromNumber(colorNum: number): string {
	if (colorNum < 0 || colorNum > 0xFFFFFF) {
		throw new ColorError('Incorrect num to translate to hex')
	}
	let colorStr = colorNum.toString(16).toUpperCase();
	while (colorStr.length < 6) {
		colorStr = '0' + colorStr;
	}
	return colorStr
}

export {getColorNumberFromString, getColorHexStringFromNumber};
