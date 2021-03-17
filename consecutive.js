// Find the maximum consecutive 1's in an array of 0's and 1's.

const arr = [
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
];
let max = 0;
let temp = 0;
const func = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      temp = temp + 1;
    } else {
      temp = 0;
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
const ans = func(arr);
console.log(`The maximum number of consecutive 1's are ${ans}`);
