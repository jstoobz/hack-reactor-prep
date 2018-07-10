function convertObjectToList(obj) {
  let arr = [];
  for (let key in obj) arr.push([key, obj[key]]);
  return arr;
}

var person = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

var result = convertObjectToList(person);
console.log(result);