function getLongestElement(arr) {
  return (!arr.length) ? '' : arr.reduce((acc, item) => {
    return (acc > item.length) ? acc : item;
  }, 0);
}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output);