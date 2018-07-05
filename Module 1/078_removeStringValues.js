function removeStringValues(obj) {
  return Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') delete obj[key];
  });
}