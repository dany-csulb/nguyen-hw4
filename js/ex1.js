// Homework 4 Exercise 1

// // First number Input
// var valid = false;
// let num1 = prompt("Enter your first number: ");

// // Loop to check if a string or number
// while(!valid) {
//   if (isNaN(num1)) {
//     num1 = prompt("Invalid Number, Enter your first number: ");
//   } else {
//     num1 = parseInt(num1);
//     valid = true;
//   }
// }
// // Second Number Input
// var valid = false;
// let num2 = prompt("Enter your second number: ");

// // Loop to check if string or number
// while(!valid) {
//   if (isNaN(num2)) {
//     num2 = prompt("Invalid number, Enter your second number: ");
//   } else{
//     num2 = parseInt(num2);
//     valid = true;
//   }
// }
// // Operator Input and validation
// let operator = prompt("Enter your operator: ");
// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   result = num1 / num2;
// } else {
//   result = console.log("You entered invalid operator");
// }

// console.log(`${result}`);

function checkIfInt(input) {
  if (!isNaN(input)) {
    return parseInt(input);
  } else {
    return "Invalid Input. Please try again"
  }
}

function checkOperator(num1, num2, operator) {
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = console.log("You entered invalid operator");
  }
}

let num1 = prompt("Input first number: ");
num1 = checkIfInt(num1);

let num2 = prompt("Input second number: ");
num2 = checkIfInt(num2);

console.log(num1, num2);