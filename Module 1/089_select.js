function select(arr, obj) {
  return Object.keys(obj).reduce((acc, el) => {
    if (arr.includes(el)) acc[el] = obj[el];
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