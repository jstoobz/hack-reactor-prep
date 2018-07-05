function findMaxLengthOfThreeWords(word1, word2, word3) {
  return Array.from(arguments).reduce((acc, item) => {
    return Math.max(acc, item.length);
  }, -Infinity);
}