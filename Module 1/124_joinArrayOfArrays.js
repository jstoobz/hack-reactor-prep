function joinArrayOfArrays(arr) {
  return arr.reduce((acc, item) => [...acc, ...item], [])
}


var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output);