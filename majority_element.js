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

function findCandidate(arr) {
    let majorityIndex = 0;
    let count = 1;
    for(let i = 1; i < arr.length; i++) {
        if(arr[majorityIndex] == arr[i]) {
            count++;
        } else {
            count--;
        }
        if(count == 0) {
            majorityIndex = i;
            count = 1;
        }
    }
    return arr[majorityIndex];
}

function find_majority_element_moor_algorithm(arr) {
    let n = parseInt(arr.length / 2);
    let element = findCandidate(arr);
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            count++;
        }
        if (count > n) {
            return arr[i];
        }
    }
    return false;
}


function find_majority_element_loop(arr) {
    arr.sort((a,b) => a-b)
    let element = arr[0];
    let count = 1;
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] == element) {
            count++;
        } else {
            count = 1;
            element = arr[i];
        }
    }
    if(count > parseInt(arr.length / 2)) {
        return element;
    }
    return false;
}

console.log(majority_element([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(majority_element([3, 3, 4, 2, 4, 4, 2, 4]));
console.log(find_majority_element_moor_algorithm([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(find_majority_element_moor_algorithm([3, 3, 4, 2, 4, 4, 2, 4]));
console.log(find_majority_element_loop([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(find_majority_element_loop([3, 3, 4, 2, 4, 4, 2, 4]));
