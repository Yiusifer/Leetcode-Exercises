const productExceptSelf = function(nums) {

  let productArray = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    productArray.push(product);
  }
  return productArray;
};

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

console.log(productExceptSelf([1,2,3,4]))

