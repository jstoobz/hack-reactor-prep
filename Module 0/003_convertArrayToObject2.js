function fromListToObject(array) {
  let obj = {};

  array.forEach(el => {
    return obj[el[0]] = el[1];
  });

  return obj;
}