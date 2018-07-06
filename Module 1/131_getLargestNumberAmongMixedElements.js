function getLargestNumberAmongMixedElements(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => {
    return (typeof item === 'number') && (acc === 0 || item > acc) ? item : acc;
  }, 0);
}