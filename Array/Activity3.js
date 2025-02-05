// Activity3: Push 5 Number to the empty array and then print them separatly.

let name =""; // empty string
let arr = []; // empty array
console.log(arr); // check :- empty

arr.push(154,200,23,65,8);
console.log(arr); // check :- Now elements are their

console.log("Five elements are:")
for(let i=0; i<=arr.length-1; i++){
    console.log(arr[i]);
}

// Now print in reverse manner
console.log("Reverse manner");
for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i]);
}