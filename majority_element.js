function majority_element(arr) {
    let map = {}
    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]]) {
            map[arr[i]]++;
            if(map[arr[i]] > arr.length / 2) {
                return arr[i];
            }
        } else {
            map[arr[i]] = 1;
        }
    }
    return false;
}

console.log(majority_element([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(majority_element([3, 3, 4, 2, 4, 4, 2, 4]));