function computeProductOfAllElements(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => acc * item, 1);
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output);