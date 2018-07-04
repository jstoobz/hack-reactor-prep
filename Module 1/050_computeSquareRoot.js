function computeSquareRoot(num) {
  let guess = num / 2;
  let quotient;
  let average;

  for (let i = 0; i < 6; i++) {
    quotient = num / guess;
    average = (quotient + guess) / 2;
    guess = average;
  }

  return quotient;
}