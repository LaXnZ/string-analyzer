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
        isPalindrome: isPalindrome(inputString)
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


module.exports = analyzeString;