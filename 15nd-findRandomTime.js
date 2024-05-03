function findRandomTimebetweenTwoTime() {
    // let startTime = 30;
    // let endTime = 65;
    
    // let newArray = [];
    // for(let i = 0; i < 30; i++){
    //     let item = Math.floor(Math.random() * (endTime-startTime+1)+startTime)
    //     newArray[i] = item;   
    // }
    //  for(let j=0 ; j < newArray.length ; j++){
    //     if(newArray[j]<60){
    //         newArray[j] = "07:"+newArray[j]
    //     }
    //     if(newArray[j]>=60){
    //         newArray[j]="08:"+(-60+newArray[j])
    //     }
    //  }  
    

    // return newArray
    let startTime = 730;
    let endTime = 805;
    let times = [] ;

    for(let i = 0; i < 30; i++){
        let randomTime = Math.floor(Math.random() * (endTime - startTime + 1)+ startTime)
        if(randomTime > 759 && randomTime < 800){
            i--;
        }else{
            let arrayTime = [...`${randomTime}`]
            times.push(`${arrayTime[0]}:${arrayTime[1]}${arrayTime[2]}`)
        }
    }
    return times
}

console.log(findRandomTimebetweenTwoTime());
