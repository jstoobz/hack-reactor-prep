function getLargestElement(arr) {
  return (!arr.length) ? 0 : Math.max(...arr);
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output);