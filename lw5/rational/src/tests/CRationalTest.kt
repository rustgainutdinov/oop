package tests

import tests.compareDoubleNumers
import classes.CRational
import org.junit.Test
import org.junit.Assert.*

class CRationalTest {
    @Test
    fun shouldConstructNumberEqualToTransferableNumber() {
        val rational = CRational()
        assertTrue(rational.toDouble() == 0.0)
        val rationalWithNumerator = CRational(5)
        assertTrue(rationalWithNumerator.toDouble() == 5.0)
        val rationalWithNumeratorAndDenominator = CRational(1, 8)
        assertTrue(rationalWithNumeratorAndDenominator.toDouble() == 0.125)
    }

    @Test
    fun shouldReturnOppositeInSingNumber() {
        var rational = CRational(8, 2)
        rational = -rational
        assertTrue(rational.toDouble() == -4.0)
    }

    @Test
    fun shouldReturnTheSameInSingNumber() {
        var rational = CRational(10, 2)
        rational = +rational
        assertTrue(rational.toDouble() == 5.0)
    }

    @Test
    fun shouldSumRationalNumbers() {
        val rational1 = CRational(2, 3)
        val rational2 = CRational(1, 5)
        val result = rational1 + rational2
        assertTrue(result.toDouble() == 2.0 / 3.0 + 1.0 / 5.0)
    }

    @Test
    fun shouldSubtractRationalNumbers() {
        val rational1 = CRational(5, 8)
        val rational2 = CRational(3, 9)
        val result = rational1 - rational2
        assertTrue(result.toDouble() == 5.0 / 8.0 - 3.0 / 9.0)
    }

    @Test
    fun shouldPlusAssignRationalNumber() {
        val rational1 = CRational(1, 8)
        val rational2 = CRational(9, 9)
        rational1 += rational2
        assertTrue(rational1.toDouble() == 1.0 / 8.0 + 9.0 / 9.0)
    }

    @Test
    fun shouldMinusAssignRationalNumber() {
        val rational1 = CRational(1, 8)
        val rational2 = CRational(9, 9)
        rational1 -= rational2
        assertTrue(rational1.toDouble() == 1.0 / 8.0 - 9.0 / 9.0)
    }

    @Test
    fun shouldMultiplyRationalNumbers() {
        val rational1 = CRational(2, 3)
        val rational2 = CRational(4, 1)
        val result = rational1 * rational2
        assertTrue(result.toDouble() == (2.0 / 3.0) * (4.0 / 1.0))
    }

    @Test
    fun shouldMultiplyRationalNumberAndInteger() {
        val rational1 = CRational(7, 3)
        val integerNumber = 9
        val result = rational1 * integerNumber
        assertTrue(result.toDouble() == (7.0 / 3.0) * (9.0 / 1.0))
    }

    @Test
    fun shouldDivideRationalNumbers() {
        val rational1 = CRational(7, 3)
        val rational2 = CRational(4, 5)
        val result = rational1 / rational2
        assertTrue(result.toDouble() == (7.0 / 3.0) / (4.0 / 5.0))
    }

    @Test
    fun shouldDivideRationalNumberAndInteger() {
        val rational1 = CRational(7, 9)
        val integerNumber = 9
        val result = rational1 / integerNumber
        assertTrue(result.toDouble() == (7.0 / 9.0) / 9.0)
    }

    @Test
    fun shouldMultiplyAssignRationalNumbers() {
        val rational1 = CRational(1, 10)
        val rational2 = CRational(13, 3)
        rational1 *= rational2
        assertTrue(rational1.toDouble() == (1.0 / 10.0) * (13.0 / 3.0))
    }

    @Test
    fun shouldMultiplyAssignRationalNumberAndInteger() {
        val rational1 = CRational(2, 10)
        val integerNumber = 12
        rational1 *= integerNumber
        assertTrue(compareDoubleNumers(rational1.toDouble(), (2.0 / 10.0) * (12)))
    }

    @Test
    fun shouldDivideAssignRationalNumbers() {
        val rational1 = CRational(7, 9)
        val rational2 = CRational(10, 3)
        rational1 /= rational2
        assertTrue(rational1.toDouble() == (7.0 / 9.0) / (10.0 / 3.0))
    }

    @Test
    fun shouldDivideAssignRationalNumberAndInteger() {
        val rational1 = CRational(7, 9)
        val integerNumber = 9
        rational1 /= integerNumber
        assertTrue(rational1.toDouble() == (7.0 / 9.0) / (9.0))
    }

    @Test
    fun shouldCompareToMatchRationalNumbers() {
        val rational1 = CRational(2, 11)
        val rational2 = CRational(2, 11)
        val rational3 = CRational(4, 9)
        assertTrue(rational1 == rational2)
        assertFalse(rational1 == rational3)
//        assertFalse(rational1 == 4)
        assertFalse(rational1 != rational2)
        assertTrue(rational1 != rational3)
    }

    @Test
    fun shouldCompareRationalNumbers() {
        val rational1 = CRational(2, 11)
        val rational2 = CRational(3, 11)
        val rational3 = CRational(4, 9)
        assertTrue(rational2 > rational1)
        assertTrue(rational2 < rational3)
        assertTrue(rational2 <= rational3)
        assertTrue(rational2 >= rational2)
    }

    @Test
    fun shouldCompareRationalNumberAndInt() {
        val rational1 = CRational(2, 11)
        val rational2 = CRational(22, 11)
        assertTrue(rational2 > 1)
        assertTrue(rational1 < 3)
        assertTrue(rational2 <= 5)
        assertTrue(rational2 >= 2)
    }
}