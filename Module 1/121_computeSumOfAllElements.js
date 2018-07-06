function computeSumOfAllElements(arr) {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
}