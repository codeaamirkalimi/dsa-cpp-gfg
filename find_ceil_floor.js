function find_ceil_floor(arr, x) {
    let ceil = findCeil(arr, x);
    let floor = findFloor(arr, x);
    return {ceil, floor};
}

function findCeil(arr, x) {
    if(x < arr[0]) {
        return arr[0];
    }
    for (let i = 0; i < arr.length - 1; i++) {
         if(arr[i] == x) {
            return arr[i];
        }else if(arr[i] < x && arr[i+1] >= x) {
            return arr[i+1];
        }
    }
    return -1;
}

function findFloor(arr, x) {
    if(x < arr[0]) {
        return 0
}
    for (let i = 0; i < arr.length - 1; i++) {
         if(arr[i] == x) {
            return arr[i];
        }else if(arr[i] < x && arr[i+1] >= x) {
            return arr[i];
        }
    }
    return -1;
}

console.log(find_ceil_floor([1, 2, 8, 10, 10, 12, 19], 3))

function find_ceil_floor_binary_search(arr, low, high, num) {

   while (low <= high) {
       let mid = (low + high) / 2;
       if(arr[mid] == num) {
           return arr[mid];
       }
       if (arr[mid] < num) {
           low = mid + 1;
       } else if(arr[mid] > num) {
           high = mid - 1;
       }
   }
   return false;
}

let arr = [1, 2, 8, 10, 10, 12, 19];
let low = 0;
let high = arr.length - 1;
console.log(find_ceil_floor_binary_search([1, 2, 8, 10, 10, 12, 19], low, high, 3))