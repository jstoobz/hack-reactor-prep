function listAllValues(obj) {
  return Object.values(obj);
}

person = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};

var result = listAllValues(person);
console.log(result);