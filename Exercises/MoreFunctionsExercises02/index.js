//Create an anonymous fucntion and set it equal to a variable.
let tripleNumber = function(number) {
   if (typeof number=== 'number')
     return number*3;
  else if(typeof number === 'string')
    return `ARRR!`;
  else
    return number;
};


console.log(tripleNumber(2));
console.log(tripleNumber("String"));
console.log(tripleNumber(NaN));

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */



/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let newArray =  arr.map(tripleNumber);

console.log(newArray);