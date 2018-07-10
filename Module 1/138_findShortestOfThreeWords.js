function findShortestOfOfThreeWords(word1, word2, word3) {
  return Array.from(arguments).reduce((acc, item) => {
    return acc.length <= item.length ? acc : item;
  });
}

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output);