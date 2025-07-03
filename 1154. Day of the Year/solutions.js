// https://leetcode.com/problems/day-of-the-year/description/

/**
 * THIS SOLUTION IS NOT WORKING
 */

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const dateArray = date.split("-").map((item) => Number(item));
  const extraDays = [1, -2, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1];

  const days =
    dateArray[1] * 30 +
    extraDays.slice(0, dateArray[1]).reduce((a, b) => a + b, 0);

  return days;
};
