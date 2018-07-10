function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  return principal * ((1 + interestRate / compoundingFrequency) ** (compoundingFrequency * timeInYears)) - principal;
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output);