function findShortestWordAmongMixedElements(arr) {
  return (!arr.length) ? '' : arr.reduce((acc, item) => {
    return (typeof item === 'string') && (acc === '' || item.length < acc.length) ? item : acc;
  }, '');
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output);