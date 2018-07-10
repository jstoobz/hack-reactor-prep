function findMinLengthOfThreeWords(word1, word2, word3) {
  return Array.from(arguments).reduce((acc, item) => {
    return Math.min(acc, item.length);
  }, Infinity);
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);