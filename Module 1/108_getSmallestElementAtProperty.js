function getSmallestElementAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? undefined : Math.min(...obj[key]);
}

var obj = {
  key: [2, 1, 5]
};

var output = getSmallestElementAtProperty(obj, 'key');
console.log(output);