// Homework 4 Exercise 3
// Write a program that creates the following array, then calculates and shows the sume of all arrays, min values, and max values

// Declare array with values
const values = [3, 11, 7, 2, 9, 10];

// // This function finds the sum of all numbers in array
function sum(arr) {
  let sum = 0;

  // Loop to check all elements and add to sum
  // For every index, if index is less than the length, incriment
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];    // new sum = Sum + array
  }
  return sum;
}

// Output
console.log("The sum of all array values is: ", sum(values));
console.log("The minimum value in the array is: ", Math.min(...values));
console.log("The maximum value in the array is: ", Math.max(...values));