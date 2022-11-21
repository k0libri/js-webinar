const isRestrictedRomanCharRegex = /[^ivxlcdm]/;
const romanNumbers = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
}

/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

function romanToDec(roman) {
    if (typeof roman !== "string") {
        console.warn('Not a string');
        return false;
    } 
    if (isRestrictedRomanCharRegex.test(roman)) {
        console.warn('Not a valid roman number');
        return false;
    } else {
        let sum = 0;
        let currentValue;
        let nextValue;

        for (let i = 0; i <= roman.length; i++) {
            currentValue = romanNumbers[roman.charAt(i)];
            nextValue = romanNumbers[roman.charAt(i + 1)];

            if (currentValue >= nextValue) {
                sum += currentValue;
            } else if (currentValue < nextValue) {
                sum -= currentValue;
            } else if (currentValue && !nextValue) {
                sum += currentValue;
            }
        }
        return sum;
    }
}

module.exports = romanToDec;