// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

function solution(inputString) {
    return inputString == inputString.split('').reverse().join('');
}
