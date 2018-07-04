function countCharacter(str, char) {
  return str.indexOf(char) !== -1 ? str.split(char).length - 1 : 0;
}