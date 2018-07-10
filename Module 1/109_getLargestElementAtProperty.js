function getLargestElementAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : Math.max(...obj[key]);
}

var obj = {
  key: [1, 2, 4]
};

var output = getLargestElementAtProperty(obj, 'key');
console.log(output);