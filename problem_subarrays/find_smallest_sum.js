function find_smallest_sum(arr, S) {
    let leftWindow = 0;
    let minLength = Infinity;
    let sum = 0;
    let length = 0;
    for (let rightWindow = 0; rightWindow < arr.length; rightWindow++) {
        length++;
        sum += arr[rightWindow];
        while (sum >= S) {
            minLength = Math.min( minLength, length);
            length--;
            sum -= arr[leftWindow];
            leftWindow++;
        }
    }
    return minLength;
}

console.log(find_smallest_sum([2, 1, 5, 2, 8], 7));
console.log(find_smallest_sum([2, 1, 5, 2, 3, 2], 7));
console.log(find_smallest_sum([3, 4, 1, 1, 6], 8));