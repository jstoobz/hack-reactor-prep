function filterEvenLengthWords(words) {
  return words.filter(el => {
    if (el.length % 2 === 0) return [].push(el);
  }, []);
}