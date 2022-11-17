/**
 * Your task is to calculate the nth value of the
 * Factorial sequence.
 * https://en.wikipedia.org/wiki/Factorial
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function factorial(n) {
    if (n < 0 || typeof n !== 'number') {
        throw new TypeError("The number cannot be smaller than zero or type mismatch!")
    } else if (n === 0) {
        return 1;
    } else {
        for (let i = n - 1; i >= 1; i--) {
            n *= i;
        }
        return n;
        // return (n * factorial(n - 1));
    }
}

module.exports = factorial;