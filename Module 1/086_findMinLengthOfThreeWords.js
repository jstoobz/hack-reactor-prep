function findMinLengthOfThreeWords(word1, word2, word3) {
  return Array.from(arguments).reduce((a, b) => {
    return Math.min(a, b.length);
  }, Infinity);
}