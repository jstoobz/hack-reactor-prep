function findSmallestElement(arr) {
  return (!arr.length) ? 0 : arr.reduce((acc, item) => {
    return acc < item ? acc : item;
  });
}