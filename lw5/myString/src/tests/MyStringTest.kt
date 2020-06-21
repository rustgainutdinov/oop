package tests

import classes.MyString
import org.junit.Test
import org.junit.Assert
import kotlin.test.assertFalse

class MyStringTest {
    @Test
    fun shouldCheckArraysOnEquals() {
        val sourceString: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val sourceString2: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val sourceString3: Array<Char> = arrayOf('q', 'b', 'c', 'd')
        assert(checkArraysOnEquals(sourceString, sourceString2))
        assertFalse(checkArraysOnEquals(sourceString, sourceString3))
    }

    @Test
    fun shouldConstructMyStringByCharArray() {
        val sourceString: Array<Char> = arrayOf('a', 'b', 'c')
        val myString = MyString(sourceString)
        assert(checkArraysOnEquals(sourceString, myString.getStringData()))
        sourceString.set(2, 'm')
        assertFalse(checkArraysOnEquals(sourceString, myString.getStringData()))
    }

    @Test
    fun shouldCorrectlyClearMyString() {
        val sourceString: Array<Char> = arrayOf('a', 'b', 'c')
        val myString = MyString(sourceString)
        myString.clear()
        assert(myString.getStringData().isEmpty())
    }

    @Test
    fun shouldCompareMyStringClasses() {
        val sourceString: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val myString = MyString(sourceString)
        val myString2 = MyString(sourceString)
        assert(checkArraysOnEquals(myString.getStringData(), myString2.getStringData()) == (myString == myString2))
        myString2.clear()
        assert(checkArraysOnEquals(myString.getStringData(), myString2.getStringData()) == (myString == myString2))
        assert(myString != myString2)
    }

    @Test
    fun shouldConstructMyStringByOtherClassMyString() {
        val sourceString: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val myString1 = MyString(sourceString)
        val myString2 = MyString(myString1)
        assert(myString2 == myString1)
        myString1.clear()
        assert(myString2 != myString1)
    }

    @Test
    fun shouldCorrectlyGetLengthOfString() {
        val sourceString: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val sourceString2: Array<Char> = arrayOf('e', 'f', 'g', 'h')
        val myString1 = MyString(sourceString)
        val myString2 = MyString(sourceString2)
        assert(myString2.getLength() == myString1.getLength())
        myString1.clear()
        assert(myString2.getLength() != myString1.getLength())
    }

    @Test
    fun shouldCorrectlyGetSubStringFormMyString() {
        val sourceString: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val sourceString2: Array<Char> = arrayOf('e', 'f')
        val sourceString3: Array<Char> = arrayOf('g', 'h')
        val myString = MyString(sourceString + sourceString2 + sourceString3)
        assert(checkArraysOnEquals(myString.subString(4, 2).getStringData(), sourceString2))
    }

    @Test
    fun shouldCorrectlyСoncatenateMyStringToMyString() {
        val sourceString1: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val sourceString2: Array<Char> = arrayOf('e', 'f', 'g', 'h')
        val sourceString3: Array<Char> = arrayOf('e', 'f', 'g')
        val myString1 = MyString(sourceString1)
        val myString2 = MyString(sourceString2)
        val myString3 = MyString(sourceString3)
        val myString4 = MyString(sourceString1 + sourceString2)
        assert((myString1 + myString2) == myString4)
        assert((myString1 + myString3) != myString4)
    }

    @Test
    fun shouldCorrectlyСoncatenateMyStringToCharArray() {
        val sourceString1: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val sourceString2: Array<Char> = arrayOf('e', 'f', 'h')
        val myString1 = MyString(sourceString1)
        val myString3 = MyString(sourceString1 + sourceString2)
        assert(checkArraysOnEquals((myString1 + sourceString2).getStringData(), myString3.getStringData()))
    }

    @Test
    fun shouldCorrectlyСoncatenateMyStringToString() {
        val sourceCharArray1: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val sourceCharArray2: Array<Char> = arrayOf('e', 'f', 'g', 'h')
        val sourceString2 = "efgh"
        val myString1 = MyString(sourceCharArray1)
        val myString3 = MyString(sourceCharArray1 + sourceCharArray2)
        assert(checkArraysOnEquals((myString1 + sourceString2).getStringData(), myString3.getStringData()))
    }

    @Test
    fun shouldCorrectlyOverloadPlusAssign() {
        val sourceCharArray1: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val sourceCharArray2: Array<Char> = arrayOf('e', 'f', 'g', 'h')
        val myString1 = MyString(sourceCharArray1)
        val myString2 = MyString(sourceCharArray2)
        val myString3 = MyString(sourceCharArray1 + sourceCharArray2)
        myString1 += myString2
        assert(myString1 == myString3)
    }

    @Test
    fun shouldCorrectlyGetSymbolByIndex() {
        val sourceCharArray1: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val myString1 = MyString(sourceCharArray1)
        assert(myString1[1] == sourceCharArray1[1])
        assert(myString1[3] == sourceCharArray1[3])
        myString1[-45]
    }

    @Test
    fun shouldCorrectlySetSymbolByIndex() {
        val sourceCharArray1: Array<Char> = arrayOf('a', 'b', 'c', 'd')
        val myString1 = MyString(sourceCharArray1)
        val ch = 'q'
        myString1[0] = ch
        assert(myString1[0] == ch)
    }
}