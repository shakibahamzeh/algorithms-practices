function pushInArray (arr , item){
    arr[arr.length] = item
    return arr;
}

console.log(pushInArray([1,2,3],4))