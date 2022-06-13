function find_average(arr, K) {
    // take leftWindow
    // traverse through the array
    // calculate the sum
    // if the array length greater than or equal to K
    // calculate the average
    // push the element to the result array
    // then slide the window by subtract the leftWindow
    // then increment the leftWindow
    let leftWindow = 0;
    let sum = 0;
    let result = [];
    for(let rightWindow = 0; rightWindow < arr.length; rightWindow++) {
        sum += arr[rightWindow];
        if(rightWindow >= K -1) {
            result.push(sum / K);
            sum -= arr[leftWindow];
            leftWindow++
        }
    }
    return result;
}

console.log(find_average([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));