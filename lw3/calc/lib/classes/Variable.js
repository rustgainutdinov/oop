"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var check_id_for_correct_1 = require("../methods/check_id_for_correct");
var Variable = /** @class */ (function () {
    function Variable(name, value) {
        if (!check_id_for_correct_1.checkIdForCorrectness(name))
            throw new Error('Incorrect identifier name');
        this.name = name;
        this.value = value;
    }
    Variable.prototype.setValue = function (value) {
        this.value = value;
    };
    Variable.prototype.getValue = function () {
        if (this.value) {
            return this.value;
        }
        else {
            throw new Error('value is not defined');
        }
    };
    ;
    Variable.prototype.getName = function () {
        return this.name;
    };
    return Variable;
}());
exports.Variable = Variable;
