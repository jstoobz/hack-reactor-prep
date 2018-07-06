function findShortestWordAmongMixedElements(arr) {
  return (!arr.length) ? '' : arr.reduce((acc, item) => {
    return (typeof item === 'string') && (acc === '' || item.length < acc.length) ? item : acc;
  }, '');
}