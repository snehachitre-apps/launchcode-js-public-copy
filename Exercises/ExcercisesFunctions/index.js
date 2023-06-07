// A.  Write a function makeLine(size) that returns a line with exactly size hashes.
function makeLine(size, char = "#") {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += char;
  }
  return line;
}



// B. Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape.
// function makeSquare(size) {
//   let square = '';
//   for (let i = 0; i < size; i++) {
//     square += makeLine(size) + "\n";
//   }
//   return square;

// }

// C. Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.
function makeRectangle(width, height, char) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += makeLine(width, char) + "\n";
  }
  return rectangle.slice(0, -1);
}

//D. Now, go back and rewrite makeSquare to use makeRectangle.
function makeSquare(size, char) {

  return makeRectangle(size, size, char);

}

//E. Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. Use your makeLine function to do this.

function makeDownwardStairs(height, char) {
  let stairs = '';
  for (let i = 1; i <= height; i++) {
    stairs += makeLine(i, char) + "\n";
  }
  return stairs.slice(0, -1);
}
//F. Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.
function makeSpaceLine(numSpaces, numChars, char) {
  let spaces = '';
  let chars = makeLine(numChars, char);

  for (let i = 0; i < (numSpaces); i++) {
    spaces += " ";
  }
  return spaces + chars + spaces;
}

//G. Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
function makeIsoscelesTriangle(height, char) {
  let traingle = '';
  for (let i = 0; i < height; i++) {
    traingle += makeSpaceLine(height - i - 1, 2 * i + 1, char) + "\n";
  }
  return traingle.slice(0, -1);
}

//H. Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
function reverse(string) {
  let reversed = '';

  for (let i = 0; i < string.length; i++) {
    reversed = string[i] + reversed;
  }

  return reversed;
}

function makeDiamond(height, char) {
  let diamond = '';

  let traingle = makeIsoscelesTriangle(height, char);
  let reverseTraingle = reverse(makeIsoscelesTriangle(height, char));
  diamond = traingle + "\n" + reverseTraingle;

  return diamond;
}

//Calling functions
console.log("\nLine\n");
console.log(makeLine(10, "-"));
console.log("\nSquare\n");
console.log(makeSquare(4, "$"));
console.log("\nRectangle\n");
console.log(makeRectangle(10, 4, "X"));
console.log("\nDownwards Stairs\n");
console.log(makeDownwardStairs(6, "T"));
console.log("\nSpace Line\n");
console.log(makeSpaceLine(2, 4));
console.log("\nIsoscles Traingle\n");
console.log(makeIsoscelesTriangle(4, "!"));
console.log("\nDiamond\n");
console.log(makeDiamond(4, "?"));