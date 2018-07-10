function getLastElementOfProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : obj[key].pop();
}

var obj = {
  key: [1, 2, 5]
};

var output = getLastElementOfProperty(obj, 'key');
console.log(output);