function getLastElementOfProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : obj[key].pop();
}