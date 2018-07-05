function removeNumbersLessThan(num, obj) {
  return Object.keys(obj).forEach(key => {
    if (obj[key] < num) delete obj[key];
  });
}