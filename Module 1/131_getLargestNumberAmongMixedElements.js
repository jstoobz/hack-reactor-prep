function getLargestNumberAmongMixedElements(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => {
    return (typeof item === 'number') && (acc === 0 || item > acc) ? item : acc;
  }, 0);
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);