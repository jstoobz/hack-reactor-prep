function multiplyBetween(num1, num2) {
  return (num1 > num2 || num1 === num2) ? 0 : Array.apply(null, Array(num2 - num1)).map((_, n) => {
    return n + num1;
  }).reduce((acc, item) => {
    return acc * item;
  });
}

var output = multiplyBetween(2, 5);
console.log(output);