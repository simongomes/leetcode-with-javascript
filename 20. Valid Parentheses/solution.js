// https://leetcode.com/problems/valid-parentheses/description/

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function (s) {
  if (s.length === 0 || s.length % 2 !== 0) {
    return false;
  }

  const dict = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const store = [];

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === undefined) {
      store.push(s[i]);
    } else if (store.pop() !== dict[s[i]]) {
      return false;
    }
  }
  return store.length === 0;
};
