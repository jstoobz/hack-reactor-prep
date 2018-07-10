function findSmallestElement(arr) {
  return (!arr.length) ? 0 : Math.min(...arr);
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output);