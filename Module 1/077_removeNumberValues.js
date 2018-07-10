function removeNumberValues(obj) {
  return Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'number') delete obj[key];
  });
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};

removeNumberValues(obj);
console.log(obj);