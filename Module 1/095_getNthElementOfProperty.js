function getNthElementOfProperty(obj, key, n) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : obj[key][n];
}

var obj = {
  key: [1, 2, 6]
};

var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output);