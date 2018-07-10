function listAllValues(obj) {
  let values = [];
  for (let value in obj) values.push(obj[value]);
  return values;
}

person = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};

var result = listAllValues(person);
console.log(result);