/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';
let strarray = notTitle.split(" ");
let titleCase = (strarray[0].charAt(0).toUpperCase()) + strarray[0].slice(1) + " " + strarray[1].charAt(0).toUpperCase() + strarray[1].slice(1);
console.log(titleCase);