function getLengthOfThreeWords(word1, word2, word3) {
  return Array.from(arguments).reduce((acc, item) => acc + item.length, 0);
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);