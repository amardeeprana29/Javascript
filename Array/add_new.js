// Adding new vales in Arrays use :- "var_name.Push();"

var names = ["Rajan"," Amar","Rana","Harshdeep","Raj"];
console.log("Before");
console.log(names);
console.log("length =",names.length);

// Add new item
names.push("yogesh");

console.log("After");
console.log(names);
console.log("length =",names.length);

names.push(10);

console.log("After");
console.log(names);
console.log("length =",names.length);