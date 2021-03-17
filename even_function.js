// creating an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14];
//creating a function to print even numbers
const even = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
};
even(arr);
