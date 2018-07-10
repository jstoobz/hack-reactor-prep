function filterEvenElements(arr) {
  return arr.filter(el => {
    if (el % 2 === 0) return [].push(el);
  }, [])
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output);