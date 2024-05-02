function reverseArray(arr) {
    let reverseArr = [];
    for(let i = 0; i < arr.length; i++){
        reverseArr[i] = arr[arr.length - i - 1]
    }

    return reverseArr
}

console.log(reverseArray([1,2,3,4,5]));