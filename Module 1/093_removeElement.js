function removeElement(array, discarder) {
  return (!array.length) ? [] : array.reduce((acc, item) => {
    if (item !== discarder) acc.push(item);
    return acc;
  }, []);
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);