var containsDuplicate = function(nums) {
  let counter = {};
  for (const value of nums) {
    if (!counter[value]) {
      counter[value] = 1;
    } else {
      counter[value] += 1;
    }
  }

  let duplicateCheck = Object.values(counter);

  for (const value of duplicateCheck) {
    if (value > 1) {
      return true;
    }
  }
  return false;
};