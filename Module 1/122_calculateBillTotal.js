function calculateBillTotal(preTaxAndTipAmount) {
  let salesTax = 0.095;
  let tip = 0.15;

  return preTaxAndTipAmount + (preTaxAndTipAmount * salesTax) + (preTaxAndTipAmount * tip);
}