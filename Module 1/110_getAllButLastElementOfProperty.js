function getAllButLastElementOfProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].slice(0, -1);
}