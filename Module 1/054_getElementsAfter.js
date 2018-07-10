function getElementsAfter(array, n) {
  return array.slice(n + 1);
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output);