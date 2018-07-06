function getLengthOfShortestElement(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => {
    return Math.min(acc, item.length);
  }, Infinity);
}