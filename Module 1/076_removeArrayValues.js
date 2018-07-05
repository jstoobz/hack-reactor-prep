function removeArrayValues(obj) {
  return Object.keys(obj).forEach(key => {
    if (Array.isArray(obj[key])) delete obj[key];
  });
}