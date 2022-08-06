const findMin = function(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  return sortedNums[0];
};