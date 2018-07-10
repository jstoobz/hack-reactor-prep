function removeOddValues(obj) {
  return Object.keys(obj).forEach(key => {
    if (obj[key] % 2 !== 0) delete obj[key];
  });
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};

removeOddValues(obj);
console.log(obj);