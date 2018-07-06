function filterOddElements(arr) {
  return arr.filter(el => {
    if (el % 2 !== 0) return [].push(el);
  }, []);
}