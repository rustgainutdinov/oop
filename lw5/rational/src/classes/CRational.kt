package classes

import methods.getNOD

class CRational {
    private var numerator: Int
    private var denominator: Int

    constructor() {
        this.numerator = 0
        this.denominator = 1
    }

    constructor(numerator: Int) {
        this.numerator = numerator
        this.denominator = 1
    }

    constructor(numerator: Int, denominator: Int) {
        this.numerator = numerator
        this.denominator = denominator
    }

    fun getNumerator(): Int {
        return this.numerator
    }

    fun getDenominator(): Int {
        return this.denominator
    }

    fun toDouble(): Double {
        return this.getNumerator().toDouble() / this.getDenominator().toDouble()
    }

    fun setRationalNumber(number: CRational) {
        this.numerator = number.getNumerator()
        this.denominator = number.getDenominator()
    }

    operator fun unaryMinus(): CRational {
        return CRational(-this.numerator, this.denominator)
    }

    operator fun unaryPlus(): CRational {
        return this
    }

    operator fun plus(increment: CRational): CRational {
        val numerator: Int = this.getNumerator() * increment.getDenominator() + increment.getNumerator() * this.getDenominator()
        val denominator: Int = increment.getDenominator() * this.getDenominator()
        val NOD = getNOD(numerator, denominator)
        return CRational(numerator / NOD, denominator / NOD)
    }

    operator fun minus(subtrahend: CRational): CRational {
        return (this + -subtrahend)
    }

    operator fun plusAssign(increment: CRational) {
        val result = this + increment
        this.setRationalNumber(result)
    }

    operator fun minusAssign(increment: CRational) {
        val result = this - increment
        this.setRationalNumber(result)
    }

    operator fun times(multiplier: CRational): CRational {
        val numerator: Int = this.getNumerator() * multiplier.getNumerator()
        val denominator: Int = multiplier.getDenominator() * this.getDenominator()
        val NOD = getNOD(numerator, denominator)
        return CRational(numerator / NOD, denominator / NOD)
    }

    operator fun times(multiplier: Int): CRational {
        return this * CRational(multiplier)
    }

    operator fun div(divider: CRational): CRational {
        return this * CRational(divider.getDenominator(), divider.getNumerator())
    }

    operator fun div(divider: Int): CRational {
        return this * CRational(1, divider)
    }

    operator fun timesAssign(multiplier: CRational) {
        val result = this * multiplier
        this.setRationalNumber(result)
    }

    operator fun timesAssign(multiplier: Int) {
        this *= CRational(multiplier)
    }

    operator fun divAssign(divider: CRational) {
        val result = this / divider
        this.setRationalNumber(result)
    }

    operator fun divAssign(divider: Int) {
        this /= CRational(divider)
    }

    override fun equals(b: Any?): Boolean {
        var bRational: CRational? = null
        if (b is Int) {
            bRational = CRational(b)
        } else if (b is CRational) {
            bRational = b
        }
        if (bRational !== null) {
            if (this.getNumerator() == bRational.getNumerator() && this.getDenominator() == bRational.getDenominator()) {
                return true
            }
        }
        return false
    }

    operator fun compareTo(b: CRational): Int {
        return numerator * b.denominator - b.numerator * denominator
    }

    operator fun compareTo(b: Int): Int {
        return numerator - b * denominator
    }
}