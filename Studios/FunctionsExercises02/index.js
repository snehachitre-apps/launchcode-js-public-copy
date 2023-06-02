//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.


//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.


//Call your area function, then use a template literal to print, “The area is ____ cm^2.”

function areaOfRectangle(length, width = length) {
  // let area = 0;
  // area = length * width;
  return  length * width;
}
let area = areaOfRectangle(8);
// let area = areaOfRectangle(5, 4);

console.log(`The area is ${area} cm^2.`);