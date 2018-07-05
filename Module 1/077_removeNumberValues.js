function removeNumberValues(obj) {
  return Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'number') delete obj[key];
  });
}