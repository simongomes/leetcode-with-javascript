//https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

var checkIfPangram = function (sentence) {
  const letters = [...new Set(sentence.replaceAll(" ", ""))];

  return letters.length === 26 ? true : false;
};
