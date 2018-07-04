function countWords(str) {
  return str.trim() === '' ? {} : str.split(' ').reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
  }, {});
}