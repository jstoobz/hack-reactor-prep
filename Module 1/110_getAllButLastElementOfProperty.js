function getAllButLastElementOfProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].slice(0, -1);
}

var obj = {
  key: [1, 2, 3]
};

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output);