function removeNumbersLargerThan(num, obj) {
  for (let key in obj) {
    if (obj[key] > num) delete obj[key];
  }
  return obj;
}