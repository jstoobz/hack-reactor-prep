function computeFactorialOfN(n) {
  return (n === 0) ? 1 : n * computeFactorialOfN(n - 1);
}