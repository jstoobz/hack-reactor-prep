function listAllValues(obj) {
  let values = [];
  for (let value in obj) values.push(obj[value]);
  return values;
}