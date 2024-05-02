function unshiftInArray(arr,item) {
    let newArr = [item];
    for(let i = 0; i < arr.length; i++){
      newArr[i+1] = arr[i];
    }
    return(newArr)
}

console.log(unshiftInArray([1,2,3],0))