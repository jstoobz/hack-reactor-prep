function getLargestElementAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : obj[key].reduce((acc, item) => {
    return Math.max(acc, item);
  }, -Infinity);
}