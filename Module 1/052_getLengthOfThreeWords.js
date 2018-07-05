function getLengthOfThreeWords(word1, word2, word3) {
  return Array.from(arguments).reduce((a, b) => {
    return a + b.length;
  }, 0);
}