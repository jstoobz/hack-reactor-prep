function getElementsGreaterThan10AtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].filter(el => {
    if (el > 10) return [].push(el);
  }, []);
}

var obj = {
  key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);