function removeStringValues(obj) {
  return Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') delete obj[key];
  });
}

var obj = {
  name: 'Sam',
  age: 20
};

removeStringValues(obj);
console.log(obj);