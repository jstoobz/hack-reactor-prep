function extend(obj1, obj2) {
  return Object.keys(obj2).forEach(key => {
    if (!obj1[key]) obj1[key] = obj2[key];
  });
}

var obj1 = {
  a: 1,
  b: 2
};

var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);
console.log(obj1);
console.log(obj2);