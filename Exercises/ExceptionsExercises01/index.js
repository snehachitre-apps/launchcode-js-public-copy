// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
function divide(numerator, denominator) {

  if (denominator === 0) {
    throw Error("Attempted to divide by zero.");
  }
  return numerator / denominator;
}
console.log(divide(6, 3));
console.log(divide(6, 0));