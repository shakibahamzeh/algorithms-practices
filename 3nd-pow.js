function powNum (firstNum , secondNum) {
    let finalResult = 1;
   for(let i = 1 ; i <= secondNum ;  i ++) {
     finalResult = finalResult * firstNum;
   }
   console.log(finalResult);
}

powNum(2,3)