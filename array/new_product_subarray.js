const maxProduct = function(nums) {
  let largestProduct = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentProduct = 1

    for (let y = i ; y < nums.length; y++) {
      currentProduct *= nums[y];

      if (currentProduct > largestProduct) {
        largestProduct = currentProduct;
      }
    }
  }
  return largestProduct;
};

// Input: nums = [-2,0,-1]
// Output: 0

console.log(maxProduct([2,3,-2,4]))