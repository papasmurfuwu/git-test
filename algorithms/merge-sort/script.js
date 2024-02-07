// Recursion-based Fibonacci Sequence
// let n = 5;
// let arr = [0, 1];

// function fibonacci(arr, n1, n2, n){
//     // Base case 
//     if (arr.length == n){
//         return arr
//     }

//     let nextTerm = n1 + n2; 
//     n1 = n2; 
//     n2 = nextTerm;
//     arr.push(nextTerm);
//     return fibonacci(arr, n1, n2, n);
// }

// console.log(fibonacci(arr, 0, 1, 5));



// Merge Sort 
function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    const sortedArr = []; 
    while(leftArr.legnth && rightArr.lenght){
        if (leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));
