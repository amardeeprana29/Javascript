//Swap to number without using third variabe.

/* Wrong proceduer 
let a = 10;
let b = 20;
console.log("Before swaping a =",a,"and b =",b);

a = 10 + 10 ;
b = 20 - 10 ; // original data lost a and b
console.log("After swaping a =",a,"and b =",b);*/


let a = 10;
let b = 20;
console.log("Before swaping a =",a,"and b =",b);
// addition process

/*b = b-a;   wrong concept
a = a+a; */  

// right code it work
/*a = a + b;
b = a - b;
a = a - b; */

// Multiplication process

a = a*b;
b = a/b;
a = a/b;

console.log("after swaping a =",a,"and b =",b);