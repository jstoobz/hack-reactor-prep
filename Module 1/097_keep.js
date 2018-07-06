function keep(array, keeper) {
  return array.filter(el => {
    if (el === keeper) return [].push(el);
  }, []);
}