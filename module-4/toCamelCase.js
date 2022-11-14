/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

const toCamelCase = (toConvert) => {
    if (typeof toConvert !== "string"){
        return "";
    }

    toConvert = toConvert.match(/\w+/g);
    let firstWord = toConvert[0].toLowerCase();
    let otherWords = toConvert.splice(1);

    let result = firstWord.concat(otherWords.map((word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
        }).join(""));

    return result;
}

/**
const ALLOWED_CHARACTERS = "abcdefghijklmnoprstuvwxyz0123456789"

function toCamelCase(toConvert) {
    if (typeof toConvert !== "string") {
        return "";
    }
    const words = toConvert.split(" ");
    const cleanedWords = words.map(word => {
        return word.split("").filter(c => {
            return ALLOWED_CHARACTERS.includes(c.toLowerCase());
        }).join("");
    });
    const realWords = cleanedWords.filter(word => word !== "");
    console.log("WORDS: ", words);
    console.log("cleanedWords: ", cleanedWords);
    console.log("realWords: ", realWords);
    const ucWords = realWords.map((word, i) => {
        if (!i) {
            return word.toLowerCase();
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return ucWords.join("");
}
 */
module.exports = toCamelCase;