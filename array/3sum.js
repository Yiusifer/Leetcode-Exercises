const threeSum = function(nums) {
  let result = [];

  for (let i  = 0; i < nums.length - 2; i++) {
    let triplet = [];
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k  = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          triplet.push(nums[i], nums[j], nums[k]);
          result.push(triplet);
          triplet = [];
        }
      }
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i].every(number => result[j].includes(number))) {
        result.splice(result[j], 1)

      }
    }
  }


  return result;
};

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

console.log(threeSum([0,0,0,0]))