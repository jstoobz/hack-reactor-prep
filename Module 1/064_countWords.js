function countWords(str) {
  return (!str.trim()) ? {} : str.split(' ').reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

var output = countWords('ask a bunch get a bunch');
console.log(output);