function getSquaredElementsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].map(el => {
    return Math.pow(el, 2);
  });
}