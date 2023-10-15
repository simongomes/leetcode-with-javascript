// https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  const tempX = x;
  let y;

  while (x !== 0) {
    !y ? (y = x % 10) : (y = y * 10 + (x % 10));
    x = Math.floor(x / 10);
  }

  return tempX === y;
};
