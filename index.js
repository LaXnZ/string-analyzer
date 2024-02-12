function analyzeString(inputString) {
    const details = {
        length: inputString.length,
        characterCount: countCharacters(inputString),
        wordCount: countWords(inputString),
        containsNumbers: /[0-9]/.test(inputString),
        containsSpecialCharacters: /[!@#$%^&*(),.?":{}|<>]/.test(inputString),
        containsWhitespace: /\s/.test(inputString),
        isAllUpperCase: inputString.toUpperCase() === inputString,
        isAllLowerCase: inputString.toLowerCase() === inputString,
        isPalindrome: isPalindrome(inputString),
        characterFrequency: countCharacterFrequency(inputString),
        vowelCount: countVowels(inputString),
        consonantCount: countConsonants(inputString),
        isAnagram: isAnagram,
        isAntigram: isAntigram,
        countSubstringOccurrences: countSubstringOccurrences,
        startsWith: startsWith,
        endsWith: endsWith,
        longestWord: findLongestWord(inputString),
        reverseWords: reverseWords(inputString)
    };

    return details;
}

function countCharacters(inputString) {
    return inputString.length;
}

function countWords(inputString) {
    return inputString.split(/\s+/).filter(word => word.trim() !== '').length;
}

function isPalindrome(inputString) {
    const cleanedString = inputString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}

function countCharacterFrequency(inputString) {
    const characterCounts = {};
    for (const char of inputString) {
        characterCounts[char] = (characterCounts[char] || 0) + 1;
    }
    return characterCounts;
}

function countVowels(inputString) {
    const vowels = /[aeiou]/gi;
    return (inputString.match(vowels) || []).length;
}

function countConsonants(inputString) {
    const consonants = /[bcdfghjklmnpqrstvwxyz]/gi;
    return (inputString.match(consonants) || []).length;
}

function isAnagram(inputString1, inputString2) {
    const cleanedString1 = inputString1.toLowerCase().replace(/[^a-z]/g, '');
    const cleanedString2 = inputString2.toLowerCase().replace(/[^a-z]/g, '');
    return cleanedString1.split('').sort().join('') === cleanedString2.split('').sort().join('');
}

function isAntigram(inputString1, inputString2) {
    const cleanedString1 = inputString1.toLowerCase().replace(/[^a-z]/g, '');
    const cleanedString2 = inputString2.toLowerCase().replace(/[^a-z]/g, '');
    return cleanedString1.split('').every(char => !cleanedString2.includes(char));
}

function countSubstringOccurrences(inputString, substring) {
    const regex = new RegExp(substring, 'gi');
    const matches = inputString.match(regex);
    return matches ? matches.length : 0;
}

function startsWith(inputString, substring) {
    return inputString.startsWith(substring);
}

function endsWith(inputString, substring) {
    return inputString.endsWith(substring);
}

function findLongestWord(inputString) {
    const words = inputString.split(/\s+/).filter(word => word.trim() !== '');
    if (words.length === 0) return null;
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

function reverseWords(inputString) {
    return inputString.split(/\s+/).map(word => word.split('').reverse().join('')).join(' ');
}

module.exports = analyzeString;
