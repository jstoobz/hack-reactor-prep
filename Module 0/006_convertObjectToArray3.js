function convertObjectToList(obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}

var person = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

var result = convertObjectToList(person);
console.log(result);