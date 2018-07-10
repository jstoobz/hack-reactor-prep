function getOddElementsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].filter(el => {
    if (el % 2 !== 0) return [].push(el);
  }, []);
}

var obj = {
  key: [1, 2, 3, 4, 5]
};

var output = getOddElementsAtProperty(obj, 'key');
console.log(output);