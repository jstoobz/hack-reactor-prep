function filterOddElements(arr) {
  return arr.filter(el => {
    if (el % 2 !== 0) return [].push(el);
  }, []);
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);