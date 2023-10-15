var printVertically = function (s) {
  const words = s.split(" ");
  let maxLength = 0;
  const output = [];

  // Find the max length of words
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].length < maxLength) {
      const extra = maxLength - words[i].length;
      const spaces = new Array(extra).fill(" ").join("");
      words[i] = words[i] + spaces;
    }
  }

  for (let i = 0; i < maxLength; i++) {
    output[i] = words
      .map((word) => word[i])
      .join("")
      .trimEnd();
  }

  return output;
};
