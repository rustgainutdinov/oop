"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var check_id_for_correct_1 = require("../../methods/check_id_for_correct");
var assert = require('assert');
describe('check id for correct', function () {
    it('should check id for rule SR3', function () {
        assert(check_id_for_correct_1.checkIdForCorrectness('abc') === true);
        assert(check_id_for_correct_1.checkIdForCorrectness('пфпфп') === false);
        assert(check_id_for_correct_1.checkIdForCorrectness('5abc') === false);
        assert(check_id_for_correct_1.checkIdForCorrectness('') === false);
    });
});
