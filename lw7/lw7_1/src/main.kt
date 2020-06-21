class Human(height: Int, weight: Int, name: String) {
    val height = height
    val weight = weight
    val name = name
}

fun getMaxWeight(p1: Human, p2: Human): Boolean {
    System.out.println()
    val a = p1.weight
    val b = p2.weight
    return getMax(a, b)
}

fun <T> getMax(a: T, b: T): Boolean {
    if ((a is Int && b is Int && a > b)
            || (a is Double && b is Double && a > b)
            || (a is Char && b is Char && a > b)) {
        return true
    }
    return false
}

fun main(args: Array<String>) {
    val person1 = Human(160, 67, "Joe")
    val person2 = Human(170, 87, "Max")
    val person3 = Human(175, 72, "Sue")
    val arr = arrayOf(person1, person2, person3)
    val tmpValue = TemplateValue(arr[0])
    if (findMax(arr, tmpValue, ::getMaxWeight)) {
        System.out.println(tmpValue.value.weight)
    }
}