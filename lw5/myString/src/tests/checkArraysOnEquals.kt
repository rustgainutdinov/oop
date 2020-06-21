package tests

fun checkArraysOnEquals(a: Array<Char>, b: Array<Char>): Boolean {
    if (a.size != b.size) {
        return false
    }
    for (i in 0..(a.size - 1)) {
        if (a[i] != b[i]) {
            return false
        }
    }
    return true
}