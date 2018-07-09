function getProperty(obj, key) {
  return obj[key];
}

var obj = {
  key: 'value'
};

var output = getProperty(obj, 'key');
console.log(output);