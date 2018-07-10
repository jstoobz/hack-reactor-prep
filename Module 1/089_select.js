function select(arr, obj) {
  return selectObj = arr.reduce((acc, item) => {
    if (obj[item]) acc[item] = obj[item];
    return acc;
  }, {});
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

var output = select(arr, obj);
console.log(output);