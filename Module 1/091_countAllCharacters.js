function countAllCharacters(str) {
  return (!str.trim()) ? {} : str.split('').reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

var output = countAllCharacters('banana');
console.log(output);