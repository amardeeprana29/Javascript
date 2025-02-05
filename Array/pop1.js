// remove 3 elements

let numbers=[5,11,56,21,99,121];
console.log(numbers);

// Pop() - always empty
/*numbers.pop();
numbers.pop();
numbers.pop();

console.log(numbers);
*/

for(let i=1; i<=3; i++){
    numbers.pop();
}
console.log(numbers);

// My logic don't use this code bcz noy sure
/*let start_index = 0;
let last_index = numbers.length-1
for(let index=start_index; index<=last_index-3; index++){
    console.log(numbers[index]);
}*/