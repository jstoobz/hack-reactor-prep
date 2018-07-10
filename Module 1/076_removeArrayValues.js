function removeArrayValues(obj) {
  return Object.keys(obj).forEach(key => {
    if (Array.isArray(obj[key])) delete obj[key];
  });
}
var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
};

removeArrayValues(obj);
console.log(obj);