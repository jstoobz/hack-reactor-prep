function removeStringValuesLongerThan(num, obj) {
  return Object.keys(obj).forEach(key => {
    if (obj[key].length > num) delete obj[key];
  });
}