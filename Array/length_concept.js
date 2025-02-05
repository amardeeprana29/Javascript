// Length concept in array
// In JS inbuild thing of (dot).length
let numbers = [1,2,3,4,44,89,6,55];

console.log("Length of the array",numbers.length); // 8

// so we can say that Length = No. of element
let last_index = numbers.length-1;

// Using for loop
/*for(let index=0; index<=last_index; index++){
    console.log(numbers[index]);
}*/

// using While loop
let index=0;
while(index<=last_index){
    console.log(numbers[index]);
    index++;
}
