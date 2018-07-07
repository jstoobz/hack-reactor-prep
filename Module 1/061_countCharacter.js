function countCharacter(str, char) {
  return (str.indexOf(char) === -1) ? 0 : str.split(char).length - 1;
}