function computeSumOfAllElements(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output);