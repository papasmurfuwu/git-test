// Selection Sort 
// 1. Scan through array find smallest number
// 2. Put it to the first element 
// 3. Do the same thing starting from second item 


// let selectionSort = function(arr){
//     let min = arr[0];
//     for (j=0; j < arr.length; j++){
//         for (i=0; i < arr.length - j; i++){
//             if (arr[i+1] < min){
//                 min = arr[i+1];
//                 min = arr[0]
//             }
//         }
//     }
//     return arr
// }


// let selectionSort = function(arr){
//     for (i=0; i<arr.length; i++){
//         let min = i; 
//         for (j=i+1; j<arr.length; i++){
//             if (arr[j] < arr[i]){
//                 min = j;
//             }
//         }
//         if (!min == i){
//             // replace minimum value
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[j] = temp; 
//         }
//     }
//     return arr
// }

// console.log(arr1);
// console.log(selectionSort(arr1));

const arr1 = Array.from({length:10}, () => Math.floor(Math.random()*100) + 1);

let selectionSort = function(arr){
    for (i=0; i<arr.length; i++){
        let min = i; 
        for (j=i+1; j<arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        if (min !== i){
            // replace minimum value
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp; 
        }
    }
    return arr
}

console.log(arr1);
console.log(selectionSort(arr1));