/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let i = 0; i < 21; i++)
  console.log(i);
console.log("----------------------");
for (let j = 3; j < 29; j += 2)
  console.log(j);
console.log("----------------------");

for (let k = 12; k >= -14; k -= 2)
  console.log(k);
console.log("----------------------");

for (let l = 50; l > 20; l--) {
  if (k = l % 3 == 0)
    console.log(l);
}


/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */
console.log("----------------------");
let string = "LaunchCode";
let array = [1, 5, "LC101", "blue", 42];

for (let m = 0; m < array.length; m++)
  console.log(array[m]);

let reverse="";
for (let n = 0; n < string.length; n++){
  reverse = string[n] + reverse;

}
console.log(reverse);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let bigArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] 
let evenArr =[];
let oddArr=[];

for (let p=0; p < bigArray.length; p++)
  {
    if(bigArray[p] %2==0)
      evenArr.push(bigArray[p]);
    else
      oddArr.push(bigArray[p]);
  }
console.log("Even Array: ");
for (let r=0;r < evenArr.length; r++)
  console.log(evenArr[r]);
console.log("Odd Array: ");
for (r=0;r < oddArr.length; r++)
  console.log(oddArr[r]);