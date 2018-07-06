function computeProductOfAllElements(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => {
    return acc * item;
  }, 1);
}