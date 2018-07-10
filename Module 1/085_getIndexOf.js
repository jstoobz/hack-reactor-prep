function getIndexOf(char, str) {
  return str.search(char);
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output);