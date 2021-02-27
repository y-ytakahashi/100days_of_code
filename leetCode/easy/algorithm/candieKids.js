/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = candies.length
  console.log('max',max)
    candies.forEach(item => {
      if (item > max) max = item
    });
    return candies.map(item => item + extraCandies >= max ? true : false) 
};
