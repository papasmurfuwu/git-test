let n = 5;
let arr = [0, 1];

function fibonacci(arr, n1, n2, n){
    // Base case 
    if (arr.length == n){
        return arr
    }

    let nextTerm = n1 + n2; 
    n1 = n2; 
    n2 = nextTerm;
    arr.push(nextTerm);
    return fibonacci(arr, n1, n2, n);
}

console.log(fibonacci(arr, 0, 1, 5));