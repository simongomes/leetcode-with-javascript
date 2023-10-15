//https://leetcode.com/problems/maximum-subarray/description

var maxSubArray = function (nums) {
  function maxSubArray(numbers) {
    if (numbers.length == 1) return numbers[0];

    let maxSum = numbers[0];

    let current = 0;

    for (let i = 0; i < numbers.length; i++) {
      current += numbers[i];
      maxSum = Math.max(current, maxSum);
      current = Math.max(current, 0);
    }

    return maxSum;
  }

  return maxSubArray(nums);
};
