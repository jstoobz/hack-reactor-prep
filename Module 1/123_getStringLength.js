function getStringLength(string) {
  return (!string.trim()) ? 0 : [...string].reduce(acc => acc + 1, 0);
}

var output = getStringLength('hello');
console.log(output);