class MyArrayItem<T> {
	private readonly _value: T;
	private _next: MyArrayItem<T> | null = null;
	
	constructor(value: T = null) {
		this._value = value;
	}
	
	get value(): T {
		return this._value;
	}
	
	get next(): MyArrayItem<T> | null {
		return this._next;
	}
	
	set next(value: MyArrayItem<T> | null) {
		this._next = value;
	}
}

export default MyArrayItem;
