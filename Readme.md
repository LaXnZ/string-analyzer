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

## Example

### Input

```javascript
const input = "A man, a plan, a canal, Panama!";
const stringDetails = analyzeString(input);
```

### Expected Output

```json
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

## Additional Functionalities with update 1.1.1

In addition to the functionalities described above, the `analyzeString()` function now includes the following additional features:

- **characterFrequency**: Returns an object containing the frequency of each character in the input string.

  ### Input

  ```javascript
  const input = "hello";
  const characterFreq = analyzeString(input).characterFrequency;
  ```

  ### Expected Output

  ```json
  {
    "h": 1,
    "e": 1,
    "l": 2,
    "o": 1
  }
  ```

- **vowelCount**: Number of vowels in the string.

  ### Input

  ```javascript
  const input = "hello world";
  const vowelCount = analyzeString(input).vowelCount;
  ```

  ### Expected Output

  ```json
  3
  ```

- **consonantCount**: Number of consonants in the string.

  ### Input

  ```javascript
  const input = "hello world";
  const consonantCount = analyzeString(input).consonantCount;
  ```

  ### Expected Output

  ```json
  7
  ```

- **isAnagram**: Determines whether two input strings are anagrams of each other.

  ### Input

  ```javascript
  const input1 = "listen";
  const input2 = "silent";
  const isAnagram = analyzeString(input1).isAnagram(input1, input2);
  ```

  ### Expected Output

  ```json
  true
  ```

- **isAntigram**: Determines whether two input strings are antigrams of each other.

  ### Input

  ```javascript
  const input1 = "hello";
  const input2 = "world";
  const isAntigram = analyzeString(input1).isAntigram(input1, input2);
  ```

  ### Expected Output

  ```json
  false
  ```

- **countSubstringOccurrences**: Counts the number of occurrences of a substring in the input string.

  ### Input

  ```javascript
  const input = "hello world hello";
  const substring = "hello";
  const count = analyzeString(input).countSubstringOccurrences(input, substring);
  ```

  ### Expected Output

  ```json
  2
  ```

- **startsWith**: Checks if the input string starts with a certain substring.

  ### Input

  ```javascript
  const input = "hello world";
  const substring = "hello";
  const startsWith = analyzeString(input).startsWith(input, substring);
  ```

  ### Expected Output

  ```json
  true
  ```

- **endsWith**: Checks if the input string ends with a certain substring.

  ### Input

  ```javascript
  const input = "hello world";
  const substring = "world";
  const endsWith = analyzeString(input).endsWith(input, substring);
  ```

  ### Expected Output

  ```json
  true
  ```

- **longestWord**: Returns the longest word in the input string.

  ### Input

  ```javascript
  const input = "hello beautiful world";
  const longestWord = analyzeString(input).longestWord;
  ```

  ### Expected Output

  ```json
  "beautiful"
  ```

- **reverseWords**: Reverses the order of words in the input string.

  ### Input

  ```javascript
  const input = "hello world";
  const reversedWords = analyzeString(input).reverseWords(input);
  ```

  ### Expected Output

  ```json
  "world hello"
  ```

These additional functionalities enhance the capabilities of the `analyzeString()` function, providing users with a comprehensive tool for string analysis and manipulation.