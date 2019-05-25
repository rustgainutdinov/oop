"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Variable_1 = require("./classes/Variable");
var Function_1 = require("./classes/Function");
// @ts-ignore
var readline_sync_1 = __importDefault(require("readline-sync"));
var values = [];
var variables = [];
var functions = [];
function getValueFromArr(arr, name) {
    for (var i = 0; i < arr.length; i++) {
        if (values[i].getName() === name) {
            return values[i];
        }
    }
    return undefined;
}
while (true) {
    var command = readline_sync_1.default.question('> ').split(' ');
    if (command[0] === 'var') {
        declareVariable(variables, values, command[1]);
    }
    else if (command[0] === 'let') {
        var variable = declareVariable(variables, values, command[1]);
        setValue(variable, command[3]);
    }
    else if (command[0] === 'fn') {
        try {
            declareFn(functions, values, command[1], command[3], command[4], command[5]);
        }
        catch (e) {
            if (e)
                console.log(e);
        }
    }
    else if (command[0] === 'print') {
        printValue(values, command[1]);
    }
    else if (command[0] === 'printvars') {
        variables.forEach(function (variable) {
            console.log(variable.getName() + ":");
            printValue(values, variable.getName());
        });
    }
    else if (command[0] === 'printfns') {
        functions.forEach(function (func) {
            console.log(func.getName() + ":");
            printValue(values, func.getName());
        });
    }
    else if (command[0] === '...') {
        break;
    }
}
function printValue(values, name) {
    var value = getValueFromArr(values, name);
    if (value) {
        try {
            console.log(value.getValue().toFixed(2));
        }
        catch (e) {
            if (e)
                console.log('Value is not defined');
        }
    }
    else {
        console.log('Value is not defined');
    }
}
function setValue(variable, value) {
    if (!isNaN(+value)) {
        variable.setValue(+value);
    }
    else {
        var variableValue = getValueFromArr(values, value);
        console.log(variableValue);
        if (variableValue) {
            try {
                variable.setValue(variableValue.getValue());
            }
            catch (e) {
                if (e)
                    console.log('Value is not defined');
            }
        }
        else {
            console.log('Value is not defined');
        }
    }
}
function declareVariable(variables, values, name) {
    var variable = getValueFromArr(values, name);
    if (!variable) {
        variable = new Variable_1.Variable(name);
        variables.push(variable);
        values.push(variable);
    }
    return variable;
}
function declareFn(functions, values, name, leftArgStr, operatorStr, rightArgStr) {
    var func;
    if (!getValueFromArr(values, name)) {
        var operator = void 0;
        var leftArg = getValueFromArr(values, leftArgStr);
        var rightArg = getValueFromArr(values, rightArgStr);
        if (leftArg) {
            try {
                if (operatorStr) {
                    operator = new Function_1.Operator(operatorStr);
                }
                func = new Function_1.Function(name, leftArg, operator, rightArg);
            }
            catch (e) {
                if (e)
                    throw e;
            }
            functions.push(func);
            values.push(func);
        }
        else {
            throw new Error('Error');
        }
    }
    else {
        throw new Error('Error');
    }
}
