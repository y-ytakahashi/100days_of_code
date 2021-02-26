


var runningSum = function(nums) {
    let ans = [];
    let sum = 0;
    for(let n of nums){
        sum += n;
        // console.log(sum);
        ans.push(sum)
    }
    return ans;
};


var defangIPaddr = function(address) {
    const splitedAddress = address.split('.');
    const replaceAddress = splitedAddress.join('[.]')
    
    return replaceAddress
};
