function keep(array, keeper) {
  return array.filter(el => {
    if (el === keeper) return [].push(el);
  }, []);
}

var output = keep([1, 2, 3, 2, 1], 2)
console.log(output);