function computeSummationToN(n) {
  return (n === 0) ? 0 : n + computeSummationToN(n - 1);
}