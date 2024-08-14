// print the sum of all multiple of 3 from 0 to till limit

let start=0;
let limit= 20;
let sum = 0;
console.log("Sum of all multiple of 3");

while(start<=limit){
    if(start%3==0){
        sum = sum +start;
        console.log(start);
    }
    start++;
}
console.log("sum is ",sum); // 63