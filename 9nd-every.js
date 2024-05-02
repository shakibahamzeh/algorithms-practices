function everyInArray(arr,fn) {
    for(let i = 0; i < arr.length; i++){
      if(!fn(arr[i])){
          return false
      }else{
          return true
      }  
    }
}

console.log(everyInArray([1,2,3,4,5], x => x > 0));