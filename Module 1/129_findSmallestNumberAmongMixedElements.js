function findSmallestNumberAmongMixedElements(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => {
    return (typeof item === 'number') && (acc === 0 || item < acc) ? item : acc;
  }, 0);
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output);