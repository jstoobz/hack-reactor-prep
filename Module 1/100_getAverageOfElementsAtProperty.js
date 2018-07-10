function getAverageOfElementsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? 0 : obj[key].reduce((acc, item) => {
    return acc + item;
  }, 0) / obj[key].length;
}

var obj = {
  key: [1, 2, 3]
};

var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);