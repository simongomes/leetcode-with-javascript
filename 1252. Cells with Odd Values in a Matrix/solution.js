//https://leetcode.com/problems/day-of-the-year/description/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const matrix = new Array(m).fill(0).map((_) => new Array(n).fill(0));
  let odds = 0;

  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < indices[i].length; j++) {
      const index = indices[i][j];
      if (j === 0) {
        matrix[index] = matrix[index].map((item) => item + 1);
      } else {
        matrix.forEach((item) => {
          item[index] += 1;
        });
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) odds++;
    }
  }

  return odds;
};
