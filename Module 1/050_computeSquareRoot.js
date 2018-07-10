function computeSquareRoot(num) {
  let guess = num / 2;

  for (let i = 0; i < 6; i++) {
    guess = ((num / guess) + guess) / 2;
  }

  return guess;
}

var output = computeSquareRoot(9);
console.log(output);