package classes

import tests.checkArraysOnEquals

class MyString {
    private var charArray: Array<Char> = emptyArray()

    constructor(charArray: Array<Char>) {
        this.charArray = charArray.clone()
    }

    constructor(other: MyString) {
        charArray = other.getStringData()
    }

    fun getStringData(): Array<Char> {
        return this.charArray.clone()
    }

    fun getLength(): Int {
        return this.charArray.size
    }

    fun subString(start: Int, userLength: Int = -1): MyString {
        var length = userLength
        if (userLength > this.getLength() - start) {
            length = this.getLength() - start
        }
        val subString: Array<Char> = Array(length) { i -> this.charArray.get(i + start) }
        return MyString(subString)
    }

    fun clear() {
        this.charArray = emptyArray()
    }

    operator fun plus(b: MyString): MyString {
        return MyString(this.charArray + b.getStringData())
    }

    operator fun plus(b: Array<Char>): MyString {
        return MyString(this.charArray + b)
    }

    operator fun plus(b: String): MyString {
        return this + b.toCharArray().distinct().toTypedArray()
    }

    override fun equals(b: Any?): Boolean {
        if (b !is MyString) {
            return false
        }
        return checkArraysOnEquals(this.getStringData(), b.getStringData())
    }

    operator fun plusAssign(b: MyString) {
        this.charArray += b.getStringData()
    }

    operator fun get(i: Int): Char {
        if (i >= this.getLength()) {
            return this.charArray.get(this.getLength() - 1)
        }
        return this.charArray.get(i)
    }

    operator fun set(i: Int, b: Char) {
        if (i >= this.getLength()) {
            return
        }
        this.charArray.set(i, b)
    }
}