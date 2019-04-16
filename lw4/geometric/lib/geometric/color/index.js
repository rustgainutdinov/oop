"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("../error/color");
function getColorNumberFromString(colorStr) {
    var regexp = colorStr.match(/[0-9a-f]{6}/ig);
    if (!regexp || regexp[0] !== colorStr) {
        throw new color_1.ColorError('Incorrect color');
    }
    return +("0x" + colorStr);
}
exports.getColorNumberFromString = getColorNumberFromString;
function getColorHexStringFromNumber(colorNum) {
    if (colorNum < 0 || colorNum > 0xFFFFFF) {
        throw new color_1.ColorError('Incorrect num to translate to hex');
    }
    var colorStr = colorNum.toString(16).toUpperCase();
    while (colorStr.length < 6) {
        colorStr = '0' + colorStr;
    }
    return colorStr;
}
exports.getColorHexStringFromNumber = getColorHexStringFromNumber;
