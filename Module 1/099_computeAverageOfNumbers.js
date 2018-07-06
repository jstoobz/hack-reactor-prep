function computeAverageOfNumbers(nums) {
  return (!nums.length) ? 0 : nums.reduce((acc, item) => {
    return acc + item;
  }, 0) / nums.length;
}