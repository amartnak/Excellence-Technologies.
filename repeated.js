// Suppose you have an array of 101 integers.
// This array is already sorted and all numbers in this array are consecutive.
// Each number only occurs once in the array except one number which occurs twice.
// Write a js code to find the repeated number.

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
let func = function () {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    } else {
      set.add(arr[i]);
    }
  }
};
const ans = func(arr);
console.log(`The repeated number is ${ans} `);
