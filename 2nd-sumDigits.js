function sumDigits (num){
//   let strJoinNum = num.toString();
//   let arr = [...strJoinNum];
//   let sum = 0;
//   for (let i = 0 ; i < arr.length ; i++){
//      sum = sum + Number(arr[i]);
//   }

var sum = 0
while(num) {
  sum = sum + num % 10
  num = Math.trunc(num / 10)
}
  return sum
} 

console.log(sumDigits(542))