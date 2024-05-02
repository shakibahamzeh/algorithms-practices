function concatMethod(firstArr , secondArr) {
    let result = firstArr;
    for(let i = 0; i < firstArr.length; i++){
        for(let j = 0; j < secondArr.length; j++){
           result[firstArr.length] = secondArr[j]
        }
        return result
    }
}

console.log(concatMethod([1,2,3],[4,5,6]))