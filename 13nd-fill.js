function fillArray(arr,value, start , end) {
    for(let i = 0; i < arr.length; i++){
        if(start && end){
            for(let i = start; i < end; i++){
                arr[i] = value
            }
        }else if(start){
            for(let i = start; i < arr.length; i++){
                arr[i] = value
            }
        }else{
                arr[i] = value
        }
    }
    return arr
}


console.log(fillArray([1,2,3,4,5],0,1,3))    // [1,0,0,4,5]
console.log(fillArray([1,2,3,4,5],0,1))      // [1,0,0,0,0,]
console.log(fillArray([1,2,3,4,5],0))        // [0,0,0,0,0]