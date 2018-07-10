function computeFactorialOfN(n) {
  return (n === 0) ? 1 : n * computeFactorialOfN(n - 1);
}

var output = computeFactorialOfN(3);
console.log(output);

var output = computeFactorialOfN(4);
console.log(output);