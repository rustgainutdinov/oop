package main

import classes.MyString

fun main(args: Array<String>) {
    val charArray: Array<Char> = arrayOf('a', 'b', 'c');
    val myString = MyString(charArray)
    charArray.set(1, 'q')
    System.out.println(charArray.get(1))
}