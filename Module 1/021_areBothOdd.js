function areBothOdd(num1, num2) {
  return (num1 % 2 !== 0 && num2 % 2 !== 0);
}

var output = areBothOdd(1, 3);
console.log(output);