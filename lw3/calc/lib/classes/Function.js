"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var check_id_for_correct_1 = require("../methods/check_id_for_correct");
var Operator = /** @class */ (function () {
    function Operator(str) {
        if (str === '+') {
            this.func = function (a, b) { return a + b; };
        }
        else if (str === '-') {
            this.func = function (a, b) { return a - b; };
        }
        else if (str === '*') {
            this.func = function (a, b) { return a * b; };
        }
        else if (str === '/') {
            this.func = function (a, b) { return a / b; };
        }
        else {
            throw Error('operator is not defined');
        }
    }
    return Operator;
}());
exports.Operator = Operator;
var Function = /** @class */ (function () {
    function Function(name, leftArg, operator, rightArg) {
        if (!check_id_for_correct_1.checkIdForCorrectness(name))
            throw new Error('Incorrect identifier name');
        this.name = name;
        this.leftArg = leftArg;
        this.operator = operator;
        this.rightArg = rightArg;
    }
    Function.prototype.getName = function () {
        return this.name;
    };
    Function.prototype.getValue = function () {
        if (this.operator && this.rightArg) {
            return this.operator.func(this.leftArg.getValue(), this.rightArg.getValue());
        }
        else {
            return this.leftArg.getValue();
        }
    };
    return Function;
}());
exports.Function = Function;
