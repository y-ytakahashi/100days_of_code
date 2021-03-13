/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    console.log(accounts);
    const rtnVal = accounts.map(item => {
        let ans =  item.reduce(function(acc,currentVal){
            return acc + currentVal
        },0)
        return ans
        
        
    })
        return Math.max.apply(null,rtnVal)
};
