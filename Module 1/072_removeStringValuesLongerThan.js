function removeStringValuesLongerThan(num, obj) {
  return Object.keys(obj).forEach(key => {
    if (obj[key].length > num) delete obj[key];
  });
}

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

removeStringValuesLongerThan(6, obj);
console.log(obj);