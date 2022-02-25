// Homework 4 Exercise 5
// This program asks user for a word then displays the number of vowels in a word and whether it's a palindrome

let str = prompt("Enter a word: ");

// This function checks for vowels in the string and returns the count
function isVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  count = 0; 

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    } 
  }
  return count;
}

// This function checks if the string is a palindrome
function checkPalindrome(str) {
  let x = str.length -1;    // declare variable to gethe last index

  // Loop each character; divide the last index to split the word, and incriment
  for (let i=0; i < x/2; i++) {
    let firstChar = str[i].toLowerCase();
    let lastChar = str[x - i].toLowerCase();
    // if the first and last char don't match
    if (firstChar != lastChar) {
      return "is not a Palindrome";
    }
  }
  return "is a Palindrome";
}

console.log(`${str} contains ${isVowel(str)} vowels and ${checkPalindrome(str)}`);