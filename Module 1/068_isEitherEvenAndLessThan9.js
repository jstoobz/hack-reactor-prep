function isEitherEvenAndLessThan9(num1, num2) {
  return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9);
}