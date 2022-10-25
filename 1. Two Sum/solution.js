/**
 * Problem Link - https://leetcode.com/problems/two-sum/
 * The problem was solved using hash map
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];

    if (hash[rest] !== undefined) return [hash[rest], i];
    hash[nums[i]] = i;
  }

  return [];
};
