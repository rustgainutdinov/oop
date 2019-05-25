"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Function_1 = require("../../classes/Function");
var Variable_1 = require("../../classes/Variable");
var assert = require('assert');
describe('Operator class', function () {
    it('should get function by stright oprrator', function () {
        var operator = new Function_1.Operator('+');
        assert(operator.func(4, 5) === 9);
    });
});
describe('Function Class', function () {
    it('should create function "name" with value 1', function () {
        var variable = new Variable_1.Variable('var1', 1);
        var fn = new Function_1.Function('name', variable);
        assert(fn.getName() === 'name');
        assert(fn.getValue() === 1);
    });
    it('should create function', function () {
        var variable = new Variable_1.Variable('var1', -6.38);
        var fn = new Function_1.Function('fun3', variable);
        assert(fn.getName() === 'fun3');
        assert(fn.getValue() === -6.38);
    });
    it('should create function with two arguments', function () {
        var variable1 = new Variable_1.Variable('var1', -6);
        var variable2 = new Variable_1.Variable('var2', 9);
        var operator = new Function_1.Operator('+');
        var fn = new Function_1.Function('func4', variable1, operator, variable2);
        assert(fn.getValue() === 3);
    });
    it('should not create variable if name does not match with the rule SR3', function () {
        assert.throws(function () {
            var variable1 = new Variable_1.Variable('var1', 9);
            new Function_1.Function('3variable', variable1);
        }, Error);
    });
    it('should should not get value if arguments are not determinate', function () {
        var variable1 = new Variable_1.Variable('var1', -6);
        var variable2 = new Variable_1.Variable('var2');
        var operator = new Function_1.Operator('+');
        var fn = new Function_1.Function('func4', variable1, operator, variable2);
        assert.throws(function () {
            fn.getValue();
        }, Error);
    });
});
