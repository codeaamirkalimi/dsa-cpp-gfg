function find_maximum_sum(arr, k) {
    let i = 0;
    let j = arr.length - 1;
    let maxSum = 0;
    while (maxSum < k) {
        if(i < j) {
            let sum = arr[i] + arr[j];
            if(sum < k) {
                i++
                maxSum = Math.max(maxSum, sum);
            } else {
                j--;
            }
        }
        if(maxSum < sum && sum < k) {
            maxSum = sum;
        }
    }
}