function computePerimeterOfATriangle(side1, side2, side3) {
  return Array.from(arguments).reduce((acc, item) => acc + item, 0);
}

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output);