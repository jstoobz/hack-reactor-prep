function getElementsThatEqual10AtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].filter(el => {
    if (el === 10) return [].push(el);
  }, []);
}