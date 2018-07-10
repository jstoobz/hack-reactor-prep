function computeAverageOfNumbers(nums) {
  return (!nums.length) ? 0 : nums.reduce((acc, item) => {
    return acc + item;
  }, 0) / nums.length;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);