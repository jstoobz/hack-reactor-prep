function getAverageOfElementsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? 0 : obj[key].reduce((acc, item) => {
    return acc + item;
  }, 0) / obj[key].length;
}