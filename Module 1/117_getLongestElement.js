function getLongestElement(arr) {
  return (!arr.length) ? '' : arr.reduce((acc, item) => {
    return acc.length > item.length ? acc : item;
  });
}