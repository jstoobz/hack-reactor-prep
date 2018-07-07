function listAllValues(obj) {
  let values = [];
  for (let prop in obj) values.push(obj[prop]);
  return values;
}