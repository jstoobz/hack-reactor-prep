function computePerimeterOfATriangle(side1, side2, side3) {
  return Array.from(arguments).reduce((a, b) => {
    return a + b;
  }, 0);
}