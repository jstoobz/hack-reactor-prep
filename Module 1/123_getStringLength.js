function getStringLength(string) {
  return (!string.trim()) ? 0 : string.split('').reduce((acc, item) => {
    item.slice(1);
    return count++;
  }, count = 1);
}

var output = getStringLength('hello');
console.log(output);