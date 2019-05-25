import {checkIdForCorrectness} from "../../methods/check_id_for_correct";

const assert = require('assert');

describe('check id for correct', () => {
	it('should check id for rule SR3', function () {
		assert(checkIdForCorrectness('abc') === true);
		assert(checkIdForCorrectness('пфпфп') === false);
		assert(checkIdForCorrectness('5abc') === false);
		assert(checkIdForCorrectness('') === false);
	});
});
