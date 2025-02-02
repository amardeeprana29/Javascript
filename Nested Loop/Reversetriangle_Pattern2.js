// Reverse Right angle triangle pattern

//step4
/*for(let farms=1; farms<=5; farms++){
    //step3 -Horizontally
    let bag = "";
    //step2
    for(let seeds=5; seeds>=farms; seeds--){
        bag = bag + "*";
    }
    //step1
    console.log(bag);
}*/


for(let i=5; i>=1; i--){
    let bag = "";
    for(let j=1; j<=i; j++){
        bag = bag + j;
    }
    console.log(bag);
}