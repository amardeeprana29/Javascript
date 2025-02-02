// 1 *, 2 ** ....5 ******


/*for(let j=1; j<=5; j++){
    let bag1="";
    let bag2="";
    for(let i=1; i<=j; i++){
        bag1 = bag1 + i;
        bag2 = bag2 + "*";
    }
    console.log(bag1);
    console.log(bag2);
}*/   // small wrong code :- Incorrect Loop Structure:
// The loop is running for j = 1 to 5, but it prints two lines (bag1 and bag2) on each iteration, which does not match the expected pattern.

// right code is

for(let j=1; j<=5; j++){
        let bag1="";
        let bag2="";
    for(let i=1; i<=j; i++){
            bag1 = bag1 + i;
        }
        console.log(bag1); // number

    for(let k=1; k<=j; k++){
        bag2 = bag2 + "*";
    }
        console.log(bag2); // star
}