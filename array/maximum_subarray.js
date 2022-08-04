const maxSubArray = function(nums) {
  let largestSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
      let currentSum = nums[i];
      if (currentSum > largestSum) {
        largestSum = currentSum;
      }
      for (let y = (i + 1); y < nums.length; y++) {
        currentSum += nums[y];
        if (currentSum > largestSum) {
          largestSum = currentSum;
        }
      }

    }
  return largestSum;
};

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

console.log(maxSubArray([-2,-1]))

