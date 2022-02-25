// Homework 4 Exercise 2
// This program creates a circle object and finds the circumference and area of a circle

// Ask user for input
const r = Number(prompt("Enter the circle radius: "));

// Create Circle object
const circle = {
  // This finds the circumference of the circle
  circumference() {
    // Circumference = 2πr
    result = 2 * Math.PI * r;
    return result
  },
  // This finds the area of the circle
  area() {
    // Area = πr^2
    result = Math.PI * (Math.pow(r, r));
    return result
  }
}

// Print output
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);