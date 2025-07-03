// https://leetcode.com/problems/reverse-string/description/

// Runtime 0 ms Beats 100.00% Memory 61.27 MB Beats 48.07%

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let [l, r] = [0, s.length - 1];

  while (l < r) {
    const temp = s[l];
    s[l++] = s[r];
    s[r--] = temp;
  }

  return s;
};
