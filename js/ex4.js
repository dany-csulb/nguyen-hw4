// Homework 4 Exercise 4
// This program asks users for word and add into array, until typed, "stop" which is case insensitive. Show all words except for "stop". If "stop" is first word, enter display a message

let words = [];

while(true) {
  let input = prompt("Add a word, type stop to quit: ");

  if (input.toLowerCase() === "stop" && words.length === 0){
    console.log("No words to display, Stop was the first word entered.")
    break;
  } else if (input.toLowerCase() === "stop") {
    console.log(`You entered the following words: ${words}`);
    break;
  } else {
    words.push(input);
  }

}