function getAllKeys(obj){
  let keys = [];
  for (let key in obj) keys.push(key);
  return keys;
}

var person = {
  name : 'Sam',
  age : 25,
  hasPets : true
};

var result = getAllKeys(person);
console.log(result);