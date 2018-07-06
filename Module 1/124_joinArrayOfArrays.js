function joinArrayOfArrays(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(item);
  }, [])
}