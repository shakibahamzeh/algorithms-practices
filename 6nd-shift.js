function shiftInArray(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1]
    }
    arr.length--;
    return arr;
}

console.log(shiftInArray([0,1,2,3,4,5]))