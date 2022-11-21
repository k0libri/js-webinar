/**
 * Your task is to calculate the nth value of the
 * Catalan number sequence.
 * https://en.wikipedia.org/wiki/Catalan_number
 * 
 * cn = 2n!/(n+1)!*n!
 * 
 * @param {number} n (n >= 0)
 * @returns {number}
 */

function catalanNumber(n) {
    if (n < 0 || typeof n !== 'number') {
        throw new TypeError("Type mismatch!");
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let sum = 1;
        for (let k = 2; k <= n; k++) {
            sum *= (n + k) / k;
        }
        return Math.ceil(sum);
        // return factorial(2 * n) / (factorial(n + 1) * factorial(n));
    }

}

function factorial(n) {
    if (n < 0) {
        throw new Error("The number cannot be smaller than zero!")
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

module.exports = catalanNumber;