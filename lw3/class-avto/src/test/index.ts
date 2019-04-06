import {TV, tvState} from '../tv'

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
	
	it('Should create class with indicated values', () => {
		const defaultState: tvState = {
			powerState: true,
			chanel: 32
		};
		
		const tv = new TV(defaultState);
		const state: tvState = tv.getInfo();
		if (!checkForEquality(state, defaultState)) throw new Error();
	});
	
	it('Should change chanel if power state is false and chanel nor equal 0 when created', () => {
		let state: tvState = {
			powerState: false,
			chanel: 32
		};
		
		const expectedState: tvState = {
			powerState: false,
			chanel: 0
		};
		
		const tv = new TV(state);
		state = tv.getInfo();
		if (!checkForEquality(state, expectedState)) throw new Error();
	});
	
	it('Should successfully turn on tv if switched off', () => {
		const defaultState: tvState = {
			powerState: false,
			chanel: 0
		};
		
		const tv = new TV(defaultState);
		if (!tv.turnOn()) throw new Error();
	});
	
	it('Should not successfully turn on tv if switched on', () => {
		const defaultState: tvState = {
			powerState: true,
			chanel: 32
		};
		
		const tv = new TV(defaultState);
		if (tv.turnOn()) throw new Error();
	});
	
	it('Should successfully turn off tv if switched on', () => {
		const defaultState: tvState = {
			powerState: true,
			chanel: 32
		};
		
		const tv = new TV(defaultState);
		if (!tv.turnOff()) throw new Error();
	});
	
	it('Should not successfully turn off tv if switched off', () => {
		const defaultState: tvState = {
			powerState: false,
			chanel: 0
		};
		
		const tv = new TV(defaultState);
		if (tv.turnOff()) throw new Error();
	});
	
	it('Should successfully select chanel and return info about tv', () => {
		const defaultState: tvState = {
			powerState: true,
			chanel: 32
		};
		
		const expectedState: tvState = {
			powerState: true,
			chanel: 56
		};
		
		const tv = new TV(defaultState);
		tv.selectChanel(56);
		if (!checkForEquality(tv.getInfo(), expectedState)) throw new Error();
	});
	
});
