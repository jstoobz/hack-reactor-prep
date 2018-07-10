function filterOddLengthWords(words) {
  return words.filter(el => {
    if (el.length % 2 !== 0) return [].push(el);
  }, []);
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output);