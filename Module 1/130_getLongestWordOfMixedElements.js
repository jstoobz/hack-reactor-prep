function getLongestWordOfMixedElements(arr) {
  return (!arr.length) ? '' : arr.reduce((acc, item) => {
    return (typeof item === 'string') && (acc === '' || item.length > acc.length) ? item : acc;
  }, '');
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);