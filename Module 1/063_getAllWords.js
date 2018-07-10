function getAllWords(str) {
  return (!str.length) ? [] : str.split(' ');
}

var output = getAllWords('Radagast the Brown');
console.log(output);