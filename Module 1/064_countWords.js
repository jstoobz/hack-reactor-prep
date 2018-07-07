function countWords(str) {
  return (!str.trim()) ? {} : str.split(' ').reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}