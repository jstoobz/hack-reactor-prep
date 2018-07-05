function getAllElementsButNth(array, n) {
  array.splice(n, 1);
  return array;
}