const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

// let slice = str.slice(0,3);
// let newStr="";
// newStr=str.replace(slice,"");
// //console.log(newStr);
// newStr = newStr.concat(slice);
// console.log(newStr);


//Use a template literal to print the original and modified string in a descriptive phrase.

//console.log(`Original:  ${str}\n Modified: ${newStr}`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userStr = input.question("Please enter your string:  ");
let userStrNum = input.question("How many letters sgould be located?:  ");

if (userStrNum > userStr.length) { userStrNum = 3;    console.log(` number of letters to be relocated,  ${userStrNum} ,are more than the string length ${userStr.length}. We will move first three letters by default. `);}
let slice = userStr.slice(0, userStrNum);
let newStr = "";
newStr = userStr.replace(slice, "");
//console.log(newStr);
newStr = newStr.concat(slice);
//console.log(newStr);
console.log(`Original:  ${userStr}\n Modified: ${newStr}`);


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
