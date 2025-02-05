// Pop concept :- (dot).pop()
// POP :- Remove something from the end of the array

let arr = [1,2,3,4,5];
console.log(arr);

// POP 
arr.pop();
console.log(arr);

arr.pop();
console.log(arr);

arr.pop();
console.log(arr);

let arr1 = [];

arr1.push(1);  // [1]
arr1.push(5);  //[1,5]         
arr1.push(4);  //[1,5,4]
arr1.push(99,100);  // [1,5,4,99,100]

arr1.pop();  //[1,5,4,99]
arr1.pop();  //[1,5,4]

arr1.push(3);  //[1,5,4,3]
arr1.push("Amar");  //[1,5,4,3,Amar]
arr1.push("varun");  //[1,5,4,3,'Amar','varun']

arr1.pop(); //[1,5,4,3,'Amar']