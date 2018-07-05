function removeElement(array, discarder) {
  return (!array.length) ? [] : array.reduce((acc, item) => {
    if (item !== discarder) acc.push(item);
    return acc;
  }, []);
}