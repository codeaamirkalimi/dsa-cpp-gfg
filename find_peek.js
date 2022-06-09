function find_peek(arr) {
    let n = arr.length;
    // check if array is sorted or not
    if(arr.length < 2) {
        return arr[0]
    }
    if(arr[0] > arr[1]) {
        return arr[0];
    }
    if(arr[n-1] > arr[n-2]) {
        return arr[n-1];
    }
    for(let i = 1; i < arr.length - 2; i++) {
        if(arr[i] >= arr[i - 1] && arr[i] >= arr[i+1]) {
            return arr[i]
        }
    }

    return false;

}

console.log(find_peek([1, 3, 20, 4, 1, 0]))