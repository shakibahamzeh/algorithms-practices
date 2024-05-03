function removeElement(arr,value) {
    let newArr = [];
    let k = 0;
    let outputArr = [];
    let newIndex = 0
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] === value){
            newArr.push(arr[i])
            k = arr. length - newArr.length;
           
        }else {
            outputArr[newIndex] = arr[i];
            newIndex++
        }
    }
    console.log(outputArr , k)
}

console.log(removeElement([1,2,3,3,4],4))