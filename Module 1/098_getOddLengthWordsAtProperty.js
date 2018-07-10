function getOddLengthWordsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].filter(el => {
    if (el.length % 2 !== 0) return [].push(el);
  }, []);
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);