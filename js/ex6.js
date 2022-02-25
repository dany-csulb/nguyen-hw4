// Homework 4 Exercise 6
// This program generates a random number between 1 and 100, inclusive. Then propmpts user to guess the number (assuming valid entry). Program will provide feedback after each guess until correct then outputs attempt


var number = Math.floor((Math.random() * 100) + 1);
let input = prompt("Guess a number 1 to 100: ");
var count = 0;

function checkInput(input) {
  while (true) {
    if(input == number) {
      count++
      return "Correct!";
      break;
    } else if (input > number) {
      count++;
      input = prompt("Too high, guess again.")
    } else {
      count++
      input = prompt("Too low, guess again.");
    }
  }
}
console.log(number);
console.log(`${checkInput(input)} It took you ${count} attemps to guess the correct number.`);