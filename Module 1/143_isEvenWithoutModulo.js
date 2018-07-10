function isEvenWithoutModulo(num) {
  return Number.isInteger(num / 2);
}

var output = isEvenWithoutModulo(8);
console.log(output);