function fromListToObject(array) {
  let obj = {};
  array.forEach(el => obj[el[0]] = el[1]);
  return obj;
}

var arrCar = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
var result = fromListToObject(arrCar);
console.log(result);