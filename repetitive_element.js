function repetitive_element(arr) {
    let map = {};
    let result = [];
    for(let i =0; i < arr.length; i++) {
        if(map[arr[i]]) {
            map[arr[i]] = map[arr[i]] + 1;
        } else {
            map[arr[i]] = 1;
        }
    }
    for(let i in map) {
        if(map[i] > 1) {
            result.push(i);
        }
    }
    return result;
}

console.log(repetitive_element([15, 18, 16, 18, 16, 15, 89]))


function find_repetitive_element_math(arr) {
    // sum - (n*(n-1)/2)
    let n = arr.length;
    let sum = arr.reduce((a,b) => a+b, 0);
    console.log({sum})
    console.log(((arr.length *(arr.length - 1))/2))
    return sum - (((n - 1) * n) / 2)
}

console.log(find_repetitive_element_math([15, 18, 16, 18]))