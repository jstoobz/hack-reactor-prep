function getEvenElementsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].filter(el => {
    if (el % 2 === 0) return [].push(el);
  }, []);
}

var obj = {
  key: [1000, 11, 50, 17]
};

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output);