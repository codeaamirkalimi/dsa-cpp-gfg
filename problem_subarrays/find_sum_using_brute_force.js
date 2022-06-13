function find_sum_using_brute_force(arr, K) {
    // take sum
    // take maximum
    let maximum = 0;
    for (let i = 0; i < arr.length - K; i++) {
        let sum = 0;
        for(let j = i; j < i +  K; j++) {
            sum += arr[j];
        }
        maximum = Math.max(maximum, sum);
    }
    return maximum;
}

find_sum_using_brute_force([2, 3, 4, 1, 5], 2)