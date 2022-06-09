/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


var intersect = function(nums1, nums2) {
    let set = new Set();
    for(let i = 0; i < nums1.length; i++) {
        if(nums2.includes(nums1[i])) {
            set.add(nums1[i])
        }
    }
    return [...set];
};

nums2 = [4,9,5], nums1 = [9,4,9,8,4]

console.log(intersect(nums1, nums2));