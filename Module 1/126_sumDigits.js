function sumDigits(num) {
  return (num === 0) ? 0 : num.toString().split('').reduce((acc, item) => {
    if (acc === '-') return -item;
    return +acc + +item;
  });
}

var output = sumDigits(-316);
console.log(output);