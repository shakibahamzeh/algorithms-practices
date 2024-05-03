function joinInArray(arr,string) {
    let outPut = '!';
    let stringArr = arr.toString();
    console.log(stringArr)
    // let newArr = [];
    // for(let i = 0; i < arr.length; i++){
    //     newArr[2*i] = arr[i];
    //     newArr[2*i + 1] = outPut
    // }
    // return newArr
    for(let i = 0; i < stringArr.length; i++){
        console.log(stringArr[i])
    }
}

console.log(joinInArray([1,2,3,4,5]))