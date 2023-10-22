//https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p1 = 0;
  let p2 = nums.length - 1;

  let pointer = 0;

  while (pointer < nums.length) {
    //for each iteration we want our pointers to be shifted to the correct position. we shift zeroPointer to the right unless we see a non zero number.
    while (nums[p1] == 0) {
      p1++;
    }
    //we shift twoPointer to left unless we see a non two number.
    while (nums[p2] == 2) {
      p2--;
    }

    if (nums[pointer] < 1 && pointer > p1) {
      const temp = nums[pointer];
      nums[pointer] = nums[p1];
      nums[p1] = temp;
      continue;
    }

    if (nums[pointer] > 1 && pointer < p2) {
      const temp = nums[pointer];
      nums[pointer] = nums[p2];
      nums[p2] = temp;
      continue;
    }

    pointer++;
  }

  return nums;
};
