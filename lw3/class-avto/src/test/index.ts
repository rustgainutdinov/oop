import {TV} from '../tv';

var assert = require('assert');

describe('TV class', () => {
	function checkForEquality(x: any, y: any): boolean {
		if (x === y) return true;
		// if both x and y are null or undefined and exactly the same
		
		if (!(x instanceof Object) || !(y instanceof Object)) return false;
		// if they are not strictly equal, they both need to be Objects
		
		if (x.constructor !== y.constructor) return false;
		// they must have the exact same prototype chain, the closest we can do is
		// test there constructor.
		
		for (var p in x) {
			if (!x.hasOwnProperty(p)) continue;
			// other properties were tested using x.constructor === y.constructor
			
			if (!y.hasOwnProperty(p)) return false;
			// allows to compare x[ p ] and y[ p ] when set to undefined
			
			if (x[p] === y[p]) continue;
			// if they have the same strict value or identity then they are equal
			
			if (typeof(x[p]) !== "object") return false;
			// Numbers, Strings, Functions, Booleans must be strictly equal
			
			if (!checkForEquality(x[p], y[p])) return false;
			// Objects and Arrays must be tested recursively
		}
		
		for (p in y) {
			if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
			// allows x[ p ] to be set to undefined
		}
		return true;
	}
	
	it('Should create tv, turn it on and not turn it on again', () => {
		const tv = new TV(false, 0);
		assert(tv.turnOn());
		assert(!tv.turnOn());
	});
	
	it('Should create TV which is turned on, turn it off and not turn it off again', () => {
		const tv = new TV(true, 0);
		assert(tv.turnOff());
		assert(!tv.turnOff());
	});
	
	it('Should select channel only if TV is turned on', () => {
		const defaultState = {
			powerState: false,
			channel: 0
		};
		
		const expectedState = {
			powerState: true,
			channel: 56
		};
		
		const tv = new TV(defaultState.powerState, defaultState.channel);
		assert(!tv.selectChannel(56));
		assert(tv.turnOn());
		assert(tv.selectChannel(56));
		assert(checkForEquality(tv.getInfo(), expectedState));
	});
	
	it('Should not select channel if channel is out of range', () => {
		const defaultState = {
			powerState: true,
			channel: 32
		};
		
		const tv = new TV(defaultState.powerState, defaultState.channel);
		assert(!tv.selectChannel(156));
		assert(checkForEquality(tv.getInfo(), defaultState));
	});
	
	it('Should returned return channel whose number is 0 if TV is turned off and save previously enabled channel when TV is turned on', () => {
		const defaultState = {
			powerState: true,
			channel: 78
		};
		
		const expectedStateWhenTvIsTurnedOff = {
			powerState: false,
			channel: 0
		};
		
		const tv = new TV(defaultState.powerState, defaultState.channel);
		assert(tv.turnOff());
		assert(checkForEquality(tv.getInfo(), expectedStateWhenTvIsTurnedOff));
		assert(tv.turnOn());
		assert(checkForEquality(tv.getInfo(), defaultState));
	});
});
