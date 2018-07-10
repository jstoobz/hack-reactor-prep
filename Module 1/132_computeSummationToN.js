function computeSummationToN(n) {
  return (n === 0) ? 0 : n + computeSummationToN(n - 1);
}

var output = computeSummationToN(6);
console.log(output);