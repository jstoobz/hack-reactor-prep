function computePerimeterOfATriangle(side1, side2, side3) {
  return Array.from(arguments).reduce((acc, item) => {
    return acc + item;
  }, 0);
}