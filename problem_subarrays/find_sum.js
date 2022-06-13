// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

function find_sum(arr, K) {
    let leftWindow = 0;
    let sum = 0;
    let maximumSum = 0;
    for (let rightWindow = 0; rightWindow < arr.length; rightWindow++) {
        sum += arr[rightWindow];
        if (rightWindow >= K - 1) {
            maximumSum = Math.max(maximumSum, sum);
            sum -= arr[leftWindow];
            leftWindow++;
        }
    }
    return maximumSum;
}

console.log(find_sum([2, 1, 5, 1, 3, 2], 3));
console.log(find_sum([2, 3, 4, 1, 5], 2));