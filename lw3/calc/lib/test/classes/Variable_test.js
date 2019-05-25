"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Variable_1 = require("../../classes/Variable");
var assert = require('assert');
describe('Variable Class', function () {
    it('should create variable "name" with value 1', function () {
        var variable = new Variable_1.Variable('name', 1);
        assert(variable.getName() === 'name');
        assert(variable.getValue() === 1);
    });
    it('should create variable', function () {
        var variable = new Variable_1.Variable('variable3', -6.38);
        assert(variable.getName() === 'variable3');
        assert(variable.getValue() === -6.38);
    });
    it('should not create variable if name does not match with the rule SR3', function () {
        assert.throws(function () {
            new Variable_1.Variable('3variable', 0);
        }, Error);
    });
    it('should not get value if variable is not determined', function () {
        assert.throws(function () {
            var variable = new Variable_1.Variable('variable');
            variable.getValue();
        }, Error);
    });
    it('should set value to variable', function () {
        var variable = new Variable_1.Variable('variable');
        variable.setValue(5);
        assert(variable.getValue() === 5);
    });
});
