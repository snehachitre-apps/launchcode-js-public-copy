

//2) The 'split' method does not work on numbers, but we want the function to return a number with all the digits reversed (e.g. 1234 converts to 4321 and NOT the string "4321")
//a) Add an if statement to your reverseCharacters function to check the typeof the parameter.
//b - d) If typeof is ‘string’, return the reversed string as before. If typeof is ‘number’, convert the parameter to a string, reverse the characters, then convert it back into a number. Return the reversed number.
//e) Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

//3) Create a new function with one parameter, which is the array we want to change. The function should:
//a) Define and initialize an empty array.
//b) Loop through the old array.
//c) For each element in the old array, call reverseCharacters to flip the characters or digits.
//d) Add the reversed string (or number) to the array defined in part ‘a’.
//e) Return the final, reversed array.
//f) Be sure to print the results from each test case in order to verify your code.


function reverseCharacters(stringToReverse) {
  if (typeof (stringToReverse) == "number") {
    stringToReverse = stringToReverse.toString();
    return Number(stringToReverse.split('').reverse().join(''));
    return Number(stringToReverse.split('').reverse().join(''));
  }
  return stringToReverse.split('').reverse().join('');
}

// let stringToReverse =12;
// console.log(reverseCharacters(stringToReverse));
function reverseArrayWithReversedElements(arrayToReverse) {
  let reversedElementssArray = [];
  for (let i = 0; i < arrayToReverse.length; i++) {
    reversedElement = reverseCharacters(arrayToReverse[i]);
    reversedElementssArray.push(reversedElement);
  }
  return console.log(reversedElementssArray.reverse());
}


let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

console.log(`Original Arrays look like these: \n${arrayTest1}\n${arrayTest2}\n${arrayTest3}. \nNow let us reverse the array and its elements!\n`);
reverseArrayWithReversedElements(arrayTest1);
reverseArrayWithReversedElements(arrayTest2);
reverseArrayWithReversedElements(arrayTest3);

