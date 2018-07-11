function findShortestElement(arr) {
  return  (!arr.length) ? '' : arr.reduce((acc, item) => {
    return (acc.length <= item.length) ? acc : item;
  });
}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output);