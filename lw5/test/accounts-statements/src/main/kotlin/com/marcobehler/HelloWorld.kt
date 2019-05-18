package com.marcobehler

fun main(args: Array<String>) {
    val user = User("Bob")
    println("Hello world, ${user.name}")
}

class User(val name: String)