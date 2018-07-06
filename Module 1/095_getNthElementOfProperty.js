function getNthElementOfProperty(obj, key, n) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : obj[key][n];
}