function findMaxLengthOfThreeWords(word1, word2, word3) {
  return Array.from(arguments).reduce((a, b) => {
    return Math.max(a, b.length);
  }, -Infinity);
}