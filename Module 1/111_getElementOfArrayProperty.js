function getElementOfArrayProperty(obj, key, index) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : obj[key][index];
}