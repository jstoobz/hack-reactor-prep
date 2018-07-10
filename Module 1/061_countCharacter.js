function countCharacter(str, char) {
  return (!str.indexOf(char)) ? 0 : str.split(char).length - 1;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output);