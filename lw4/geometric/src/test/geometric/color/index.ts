import {getColorNumberFromString, getColorHexStringFromNumber} from "../../../geometric/color";
import {ColorError} from "../../../geometric/error/colorError";

const assert = require('assert');

function testGetColorNumberFromString() {
	describe('Get color number from string', () => {
		it('Should translate hex string to number', () => {
			assert(getColorNumberFromString('33ff33') === 0x33FF33);
			assert(getColorNumberFromString('0028FD') === 0x0028FD);
			assert(getColorNumberFromString('737fab') === 0x737FAB);
			assert(getColorNumberFromString('73bac4') === 0x73BAC4);
			assert(getColorNumberFromString('000000') === 0x000000);
			assert(getColorNumberFromString('ffffff') === 0xFFFFFF);
		});
		
		it('Should check incorrect colors and throw exception if necessary', () => {
			const incorrectColors = ['sn0272', 'abc7w3', 'abc5d', '', '  8373', '92abc5b'];
			incorrectColors.forEach(color => {
				try {
					getColorNumberFromString(color);
					throw new Error('got incorrect color')
				} catch (e) {
					if (!(e instanceof ColorError)) throw e
				}
			})
		})
	});
}

function testGetColorHexStringFromNumber() {
	describe('Get color hex string from string', () => {
		it('Should translate six-digit number to hex string', () => {
			const colors = [
				{num: 3407667, hex: '33FF33'},
				{num: 2682239, hex: '28ED7F'},
				{num: 7569323, hex: '737FAB'},
				{num: 7584452, hex: '73BAC4'},
				{num: 16777215, hex: 'FFFFFF'},
			];
			
			colors.forEach(item => {
				assert(getColorHexStringFromNumber(item.num) === item.hex);
			});
		});
		
		it('Should translate all numbers to hex string', () => {
			const colors = [
				{num: 99, hex: '000063'},
				{num: 64188, hex: '00FABC'},
				{num: 411690, hex: '06482A'},
				{num: 3, hex: '000003'}
			];
			
			colors.forEach(item => {
				assert(getColorHexStringFromNumber(item.num) === item.hex);
			});
		});
		
		it('Should check numbers on the interval 0..FFFFFF and throw exception if necessary', () => {
			const incorrectColors = [
				{num: 16777216},
				{num: -1}
			];
			
			const colors = [
				{num: 0, hex: '000000'},
				{num: 16777215, hex: 'FFFFFF'}
			];
			
			incorrectColors.forEach(color => {
				try {
					getColorHexStringFromNumber(color.num);
					throw new Error('got incorrect number')
				} catch (e) {
					if (!(e instanceof ColorError)) throw e
				}
			});
			
			colors.forEach(item => {
				assert(getColorHexStringFromNumber(item.num) === item.hex);
			});
		})
	});
}

export {testGetColorNumberFromString, testGetColorHexStringFromNumber}
