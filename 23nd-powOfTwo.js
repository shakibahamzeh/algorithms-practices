// function getBaseLog(x, y) {
//   return Math.log(y) / Math.log(x);
// }
// function isPowerOfTwo (n) {
//     if(n === 1) {
//         return true
//     }else{
//         let isPow =Number.isInteger(getBaseLog(2 , n));
//         if(isPow){
//             return true
//         }else {
//             return false
//         }
//     }
// } 

// isPowOfTwo(64)

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
};

isPowerOfTwo(65)