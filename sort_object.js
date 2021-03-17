//Write a code to sort the object by id

var obj = {
  4: "abc",
  10: "ab2",
  5: "abc3",
  6: "abc5",
};
// creating a function to sort obj by id
function sortObjectEntries(obj, n) {
  return Object.entries(obj)
    .sort((a, b) => b[0] - a[0])
    .map((el) => el[1])
    .slice(0, n);
}
console.log(sortObjectEntries(obj, 4));
