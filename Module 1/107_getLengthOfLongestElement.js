function getLengthOfLongestElement(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => {
    return Math.max(acc, item.length);
  }, -Infinity);
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output);