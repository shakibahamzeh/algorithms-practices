function powNum (firstNum , secondNum) {
    let finalResult = 1;
   for(let i = 1 ; i <= secondNum ;  i ++) {
     finalResult = finalResult * firstNum;
   }
   return finalResult;
}

console.log(powNum(2,3))