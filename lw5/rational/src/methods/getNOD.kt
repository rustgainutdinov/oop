package methods

//TODO: rename function to getGCD
fun getNOD(a: Int, b: Int): Int {
    var x = a
    var y = b
    if (a < b) {
        x = b
        y = a
    }
    while (x % y != 0) {
        val z = x % y
        x = y
        y = z
    }
    return y
}