// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
  return candies.map((candy) => {
    return Math.max(...candies) <= candy + extraCandies;
  });
};
