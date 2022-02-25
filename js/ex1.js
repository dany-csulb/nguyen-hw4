// Homework 4 Exercise 1
// This program asks user for number input and operator to calculate

// // First number Input
var valid = false;
let num1 = prompt("Enter your first number: ");

// Loop to check if a string or number
while(!valid) {
  if (isNaN(num1)) {
    num1 = prompt("Invalid Number, Enter your first number: ");
  } else {
    num1 = parseInt(num1);
    valid = true;
  }
}
// Second Number Input
var valid = false;
let num2 = prompt("Enter your second number: ");

// Loop to check if string or number
while(!valid) {
  if (isNaN(num2)) {
    num2 = prompt("Invalid number, Enter your second number: ");
  } else{
    num2 = parseInt(num2);
    valid = true;
  }
}
// Operator Input
var valid = false;
let operator = prompt("Enter your operator: ");

// Loop to check if operator is valid and calculate results
while(!valid) {
  if (operator === "+") {
    result = num1 + num2;
    valid = true;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    operator = prompt("Invalid Input, Please try again: ");
  }
}

console.log(`${num1} ${operator} ${num2} = ${result}`);