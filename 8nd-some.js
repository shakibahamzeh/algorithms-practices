function someInArray(arr , fn) {
   for(let i = 0; i < arr.length; i++){
       if(fn(arr[i])){
           return true
       }else {
           return false
       }
   } 
}

console.log(someInArray([1,2,3,4,5,6], x=> x>8));