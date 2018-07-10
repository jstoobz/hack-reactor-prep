function addToFrontOfNew(arr, element) {
  return [element].concat(arr);
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input);