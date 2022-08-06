const search = function(nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  }
  return -1;
};