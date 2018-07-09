function removeProperty(obj, key) {
  return delete obj[key];
}

var obj = {
  name: 'Sam',
  age: 20
}

removeProperty(obj, 'name');
console.log(obj.name);