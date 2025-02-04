// we have to print five name 

var name1 = "Rajan";
var name2 = "Amar";
var name3 = "Rana";
var name4 = "Harshdeep";
var name5 = "Raj";

// In Array we decleared multiple varibales in single variable

var name = ["Rajan"," Amar","Rana","Harshdeep","Raj"];

console.log(name);
console.log(name.length);

let marks =[ 10 , 20, 50, 60];
console.log(marks.length);

// Also mixed data 

var data=["Rajan",10,"Rana", 5];
console.log(data);

// Access any particular value ;- name[3];

console.log(name[3]);
console.log(marks[2]);

// Another way to access
var items = name.length;

console.log(name[items-1]); // Raj
console.log(items - 1);     // Index value

// values change

console.log(name1); // Rajan
console.log(name);  

name1 = "Amardeep";

name[2]="yogesh";   

console.log(name1);
console.log(name);