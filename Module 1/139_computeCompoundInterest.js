function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  return principal * Math.pow((1 + interestRate / compoundingFrequency), (compoundingFrequency * timeInYears)) - principal;
}