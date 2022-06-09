// sir math kore dito pattern anujai
// amra otake tuktam
// tarpor serokom pattern er problem dito
// amra sollve korta
// exam nito
// barite practice kortam
// exam ditam

function equilibirium(arr) {
    for(let i = 0; i < arr.length; i ++) {
        let leftSum = 0;
        for(let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        let rightSum = 0;
        for(let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        if (leftSum == rightSum) {
            return i;
        }
    }
    return false;
}

// console.log(equilibirium([-7,1,5,2,-4,3,0]))

/**
 *
 * @param {Array} arr
 */
function equilibirium_effiant(arr) {
    let sum = arr.reduce((a,b) => a+b, 0);
    let leftSum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum - arr[i];
        console.log({sum, leftSum})
        if(leftSum == sum) {
            return i;
        }
        leftSum += arr[i];
        // console.log({leftSum})
    }
    return false;
}

// console.log(equilibirium_effiant([-7,1,5,2,-4,3,0]))

function equilibirium_binary_search(arr) {
    let mid = parseInt( arr.length / 2);
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 0; i < mid; i++) {
        leftSum += arr[i];
    }
    for(let i = arr.length - 1; i >mid; i--) {
        rightSum += arr[i];
    }
    if(rightSum > leftSum) {
        while (rightSum > leftSum && mid < arr.length - 1) {
            rightSum -= arr[mid + 1]
            leftSum += arr[mid];
            mid++
        }
    } else {
        while (leftSum > rightSum && mid > 0) {
            rightSum += arr[mid];
            leftSum -= arr[mid - 1];
            mid--;
        }
    }
    if(leftSum == rightSum) {
        return mid;
    }
    return false;
}

console.log(equilibirium_binary_search([-7,1,5,2,-4,3,0]))
console.log(equilibirium_binary_search([1,1,2,1,1]))
console.log(equilibirium_binary_search([1,1,1,-1,2,1,1]))