function getLargestElement(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => {
    return Math.max(acc, item);
  });
}