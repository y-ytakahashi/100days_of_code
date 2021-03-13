/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  console.log(nums,n)
  let ans = [];
  for(let i = 0;  i < n; i ++ ){
      // 1 + 3 = 4 [2,5,1,3,4,7]
      console.log(nums[i], i)
      console.log({i},{n},nums[i + n])
      ans[i] = [ nums[i], nums[i + n]]
      //  0           0          3
      //  0           2          3
      
  }
  console.log(ans)
  return ans.flat();
  
};