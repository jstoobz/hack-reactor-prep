function fromListToObject(array) {
  let obj = {};
  array.forEach(el => obj[el[0]] = el[1]);
  return obj;
}