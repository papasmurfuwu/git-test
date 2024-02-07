// Selection Sort 
// Loop through array, switch place of smallest element in list if smaller than the first element 

let ranArr = Array.from({length: 100}, () =>Math.floor(Math.random()*10)+1)
console.log(ranArr);

function selectionSort(arr){
    for (i=0; i<arr.length;i++){
        let min = i; 
        for (j=i+1; j<arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        // replace number if i (first element in loop isn't the smallest)
        if (min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr 
}

console.log(selectionSort(ranArr));
