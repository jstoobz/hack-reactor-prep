function getEvenLengthWordsAtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].filter(el => {
    if (el.length % 2 === 0) return [].push(el);
  }, []);
}

var obj = {
  key: ['a', 'long', 'game']
};

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output);