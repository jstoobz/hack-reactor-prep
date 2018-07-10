function getElementsLessThan100AtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].filter(el => {
    if (el < 100) return [].push(el);
  }, []);
}

var obj = {
  key: [1000, 20, 50, 500]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);