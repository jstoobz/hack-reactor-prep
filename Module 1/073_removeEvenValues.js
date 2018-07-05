function removeEvenValues(obj) {
  return Object.keys(obj).forEach(key => {
    if (obj[key] % 2 === 0) delete obj[key];
  });
}