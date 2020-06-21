fun <T> findMax(array: Array<T>, sourceMaxValue: TemplateValue<T>, less: (T, T) -> Boolean): Boolean {
    if (array.isEmpty()) {
        return false
    }

    for (value in array) {
        if (less(value, sourceMaxValue.value)) {
            sourceMaxValue.value = value
        }
    }
    return true
}