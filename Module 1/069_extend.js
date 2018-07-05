function extend(obj1, obj2) {
  for (let key in obj2) {
    if (!obj1[key]) obj1[key] = obj2[key];
  }
}