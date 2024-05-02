function filterInArray(arr,fn){
    let filterArr = [];
    let filterArrIndex = 0;
    for(let i = 0; i < arr.length; i++){
            if(fn(arr[i])){
            // filterArr.push(arr[i]) 
               filterArr[filterArrIndex] = arr[i];
               filterArrIndex++;
        }  
    }
    return filterArr
}

console.log(filterInArray([1,2,3,4,5,6,7,8], x => x%2 === 0))