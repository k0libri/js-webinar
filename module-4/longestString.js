/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(strings) {
    if (Array.isArray(strings)) {
        const onlyStringArray = strings.filter(e => typeof e === 'string');
        if (onlyStringArray.length > 0) {
            const sortedFirst = onlyStringArray.sort((a, b) => b.length - a.length)[0];
            return sortedFirst;
        } else {
            return "";
        }
    } else {
        return "";
    }
}

module.exports = longestString;