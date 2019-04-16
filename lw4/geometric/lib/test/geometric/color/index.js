"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("../../../geometric/color");
var color_2 = require("../../../geometric/error/color");
var assert = require('assert');
function testFunctionGetColorNumberFromString() {
    it('Should translate hex string to number', function () {
        assert(color_1.getColorNumberFromString('33ff33') === 0x33FF33);
        assert(color_1.getColorNumberFromString('0028FD') === 0x0028FD);
        assert(color_1.getColorNumberFromString('737fab') === 0x737FAB);
        assert(color_1.getColorNumberFromString('73bac4') === 0x73BAC4);
        assert(color_1.getColorNumberFromString('000000') === 0x000000);
        assert(color_1.getColorNumberFromString('ffffff') === 0xFFFFFF);
    });
    it('Should check incorrect colors and throw exception if necessary', function () {
        var incorrectColors = ['sn0272', 'abc7w3', 'abc5d', '', '  8373', '92abc5b'];
        incorrectColors.forEach(function (color) {
            try {
                color_1.getColorNumberFromString(color);
                throw new Error('got incorrect color');
            }
            catch (e) {
                if (!(e instanceof color_2.ColorError))
                    throw e;
            }
        });
    });
}
exports.testFunctionGetColorNumberFromString = testFunctionGetColorNumberFromString;
function testFunctionGetColorHexStringFromNumber() {
    it('Should translate six-digit number to hex string', function () {
        var colors = [
            { num: 3407667, hex: '33FF33' },
            { num: 2682239, hex: '28ED7F' },
            { num: 7569323, hex: '737FAB' },
            { num: 7584452, hex: '73BAC4' },
            { num: 16777215, hex: 'FFFFFF' },
        ];
        colors.forEach(function (item) {
            assert(color_1.getColorHexStringFromNumber(item.num) === item.hex);
        });
    });
    it('Should translate all numbers to hex string', function () {
        var colors = [
            { num: 99, hex: '000063' },
            { num: 64188, hex: '00FABC' },
            { num: 411690, hex: '06482A' },
            { num: 3, hex: '000003' }
        ];
        colors.forEach(function (item) {
            assert(color_1.getColorHexStringFromNumber(item.num) === item.hex);
        });
    });
    it('Should check numbers on the interval 0..FFFFFF and throw exception if necessary', function () {
        var incorrectColors = [
            { num: 16777216 },
            { num: -1 }
        ];
        var colors = [
            { num: 0, hex: '000000' },
            { num: 16777215, hex: 'FFFFFF' }
        ];
        incorrectColors.forEach(function (color) {
            try {
                color_1.getColorHexStringFromNumber(color.num);
                throw new Error('got incorrect number');
            }
            catch (e) {
                if (!(e instanceof color_2.ColorError))
                    throw e;
            }
        });
        colors.forEach(function (item) {
            assert(color_1.getColorHexStringFromNumber(item.num) === item.hex);
        });
    });
}
exports.testFunctionGetColorHexStringFromNumber = testFunctionGetColorHexStringFromNumber;
