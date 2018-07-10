function removeProperty(obj, key) {
  if (key in obj) return delete obj[key];
}

var obj = {
  name: 'Sam',
  age: 20
}

removeProperty(obj, 'name');
console.log(obj.name);