import MyArrayItem from './MyArrayItem';
import OutOfRangeException from "./OutOfRangeException";

class MyArray<T> {
	private firstItem: MyArrayItem<T> | null = null;
	
	static copyCreate(arr: MyArray<any>): MyArray<any> {
		let newArr = new MyArray<any>();
		for (let i = 0; i < arr.len; i++) {
			newArr.add(arr.get(i));
		}
		return newArr;
	}
	
	add(value: T) {
		const item = new MyArrayItem(value);
		const lastItem = this.getLastItem();
		if (lastItem === null) {
			this.firstItem = item;
		} else {
			lastItem.next = item;
		}
	}
	
	get(searchIndex: number): T {
		const item = this.getItem(searchIndex);
		if (item === null) {
			throw new OutOfRangeException();
		}
		return item.value;
	}
	
	get len() {
		if (this.isEmpty()) {
			return 0;
		}
		let item = this.firstItem;
		let i = 1;
		while (item.next !== null) {
			item = item.next;
			i++;
		}
		return i;
	}
	
	resize(newLength: number) {
		if (this.isEmpty()) {
			return;
		}
		const newLastIndex = newLength - 1;
		let searchItem = this.getItem(newLastIndex);
		if (searchItem !== null) {
			searchItem.next = null;
			return;
		}
		let item = this.getLastItem();
		for (let i = this.len; i < newLength; i++) {
			item = item.next = new MyArrayItem();
		}
	}
	
	clear() {
		this.firstItem = null;
	}
	
	private getItem(searchIndex: number): MyArrayItem<T> | null {
		if (this.isEmpty()) {
			return null;
		}
		let item = this.firstItem;
		let i = 0;
		while (item.next !== null) {
			if (i === searchIndex) {
				return item;
			}
			item = item.next;
			i++;
		}
		if (i === searchIndex) {
			return item;
		}
		return null;
	}
	
	private getLastItem(): MyArrayItem<T> | null {
		if (this.isEmpty()) {
			return null;
		}
		let item = this.firstItem;
		while (item.next !== null) {
			item = item.next;
		}
		return item;
	}
	
	private isEmpty(): boolean {
		return this.firstItem === null;
	}
}

export default MyArray;
