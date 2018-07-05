function getLengthOfThreeWords(word1, word2, word3) {
  return Array.from(arguments).reduce((acc, item) => {
    return acc + item.length;
  }, 0);
}