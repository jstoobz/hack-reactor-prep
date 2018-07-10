function or(expression1, expression2) {
  return !(!expression1 && !expression2);
}

var output = or(true, false);
console.log(output);