"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkIdForCorrectness(name) {
    var regexpResult = name.match(/[a-z_](\w)*/ig);
    return ((regexpResult !== null) && (regexpResult[0] === name));
}
exports.checkIdForCorrectness = checkIdForCorrectness;
