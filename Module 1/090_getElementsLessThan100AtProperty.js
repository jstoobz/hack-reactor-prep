function getElementsLessThan100AtProperty(obj, key) {
  return (!Array.isArray(obj[key]) || !obj[key].length) ? [] : obj[key].filter(el => {
    if (el < 100) return [].push(el);
  }, []);
}