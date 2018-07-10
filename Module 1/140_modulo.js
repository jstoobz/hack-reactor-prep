function modulo(num1, num2) {
  return num1 - num2 * Math.trunc(num1 / num2);
}

var output = modulo(25, 4);
console.log(output);