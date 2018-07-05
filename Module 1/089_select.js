function select(arr, obj) {
  return selectObj = arr.reduce((acc, item) => {
    if (obj[item]) acc[item] = obj[item];
    return acc;
  }, {});
}