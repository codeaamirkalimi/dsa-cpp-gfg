/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j <nums.length; j++) {
            if(nums[i] == nums[j]) {
                result.push([i,j])
            }
        }
    }
    return result.length;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,1,1,1]))

function good_pairs(nums) {
    let result = [];
    let p1 = 0;
    let p2 = nums.length - 1;
    while (p1 < p2) {
        if(nums[p1] == nums[p2]) {
            result.push([p1,p2]);
        }
    }
    return result.length;
}

console.log(good_pairs([1,2,3,1,1,3]))
console.log(good_pairs([1,1,1,1]))