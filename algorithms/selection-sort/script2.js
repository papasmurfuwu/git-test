// Selection Sort 
// Loop through array, switch place of smallest element in list if smaller than the first element 

let ranArr = Array.from({length: 10}, () =>Math.floor(Math.random()*10)+1)
console.log(ranArr);

let selectionSort = function(arr){
    for (i=0; i<arr.length; i++){
        min = i;
        for(j=i+1; j<arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        if (min !== i){
            let temp = arr[i]; // temporarily store first element of this loop 
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(ranArr));
