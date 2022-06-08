function find_triplet(arr, sum) {
    let n = arr.length - 2;
    arr.sort((a,b) => a-b);
    for(let i = 0; i < n; i++) {
        let l = i + 1;
        let r = arr.length - 1;
        while (l < r) {
            let temp = arr[i] + arr[l] + arr[r];
            if(temp == sum) {
                return [i,l,r];
            }
            if(temp < sum) {
                l++
            }
            if( temp > sum) {
                r = r - 1;
            }
        }
    }
    return false;
}
let A = [ 1, 4, 45, 6, 10, 8 ];
let sum = 22;
console.log(find_triplet(A,sum));