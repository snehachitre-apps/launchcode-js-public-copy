function findMinValue(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
let sortedArray = function(arr) {
  let sortedArray = [];
  let minimum = 0;

  while (arr.length > 0) {
    minimum = findMinValue(arr);
    sortedArray.push(minimum);
    // index = arr.indexOf(minimum);
    arr.splice(arr.indexOf(minimum), 1);
  }
  return sortedArray;
}
/*Within the function:
a) Define a new, empty array to hold the final sorted numbers.
b) Use the findMinValue function to find the minimum value in the old array.
c) Add the minimum value to the new array, and remove the minimum value from the old array.
d) Repeat parts b & c until the old array is empty.
e) Return the new sorted array.
f) Be sure to print the results in order to verify your code.*/

//Your function here...



//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// console.log(sortedArray(nums1));
// console.log(sortedArray(nums2));
// console.log(sortedArray(nums3));



//BONUS:  function sort using recusion

//1.  sort
//2. find minimum

function sortArrayRecursive(oldArray, newArray = []) {
  if (oldArray.length == 1) {
    newArray.push(oldArray[0]);
  }
  else {
    newArray.push(findMinValue(oldArray));
    oldArray.splice(oldArray.indexOf(findMinValue(oldArray)), 1);
    sortArrayRecursive(oldArray, newArray);
  }
  return newArray;
}

console.log(sortArrayRecursive(nums1));
console.log(sortArrayRecursive(nums2));
console.log(sortArrayRecursive(nums3));