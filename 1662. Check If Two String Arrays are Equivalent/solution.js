//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

var arrayStringsAreEqual = function (word1, word2) {
  let wordArr1 = "";
  let wordArr2 = "";

  for (let i = 0; i < word1.length; i++) {
    wordArr1 += word1[i];
  }

  for (let i = 0; i < word2.length; i++) {
    wordArr2 += word2[i];
  }

  return wordArr1 === wordArr2;
};
