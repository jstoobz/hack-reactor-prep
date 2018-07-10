function getProductOfAllElementsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? 0 : obj[key].reduce((acc, item) => acc * item, 1);
}

var obj = {
  key: [1, 2, 3, 4]
};

var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output);