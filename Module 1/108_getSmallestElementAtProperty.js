function getSmallestElementAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : obj[key].reduce((acc, item) => {
    return Math.min(acc, item);
  }, Infinity);
}