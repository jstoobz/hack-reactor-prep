function getSumOfAllElementsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? 0 : obj[key].reduce((acc, item) => {
    return acc + item;
  });
}

var obj = {
  key: [4, 1, 8]
};

var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output);