function getSumOfAllElementsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? 0 : obj[key].reduce((acc, item) => {
    return acc + item;
  });
}