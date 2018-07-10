function removeNumbersLessThan(num, obj) {
  return Object.keys(obj).forEach(key => {
    if (obj[key] < num) delete obj[key];
  });
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
};

removeNumbersLessThan(5, obj);
console.log(obj);