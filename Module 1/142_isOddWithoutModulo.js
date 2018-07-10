function isOddWithoutModulo(num) {
  return !Number.isInteger(num / 2);
}

var output = isOddWithoutModulo(17);
console.log(output);