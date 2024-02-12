# String Analyzer

This JavaScript function, `analyzeString()`, analyzes a given string and returns various details about it.

## Installation

This function does not require any installation. You can simply include it in your JavaScript code.

## Functionality

The `analyzeString()` function takes a string as input and returns an object containing the following details:

- **length**: Length of the input string.
- **characterCount**: Number of characters in the string.
- **wordCount**: Number of words in the string.
- **containsNumbers**: Boolean indicating whether the string contains any numeric digits.
- **containsSpecialCharacters**: Boolean indicating whether the string contains any special characters.
- **containsWhitespace**: Boolean indicating whether the string contains any whitespace characters.
- **isAllUpperCase**: Boolean indicating whether the string is entirely uppercase.
- **isAllLowerCase**: Boolean indicating whether the string is entirely lowercase.
- **isPalindrome**: Boolean indicating whether the string is a palindrome (reads the same forwards and backwards).

## **Example**

### **Input**

```jsx
javascript
const input = "A man, a plan, a canal, Panama!";
const stringDetails = analyzeString(input);

```

### **Expected Output**

```json
json
{
  "length": 30,
  "characterCount": 27,
  "wordCount": 6,
  "containsNumbers": false,
  "containsSpecialCharacters": true,
  "containsWhitespace": true,
  "isAllUpperCase": false,
  "isAllLowerCase": false,
  "isPalindrome": true
}

```
