function extend(obj1, obj2) {
  return Object.keys(obj2).forEach(key => {
    if (!obj1[key]) obj1[key] = obj2[key];
  });
}