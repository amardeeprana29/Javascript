// check once  Attended , not Attended, and attended and see the result
let result=" not Attended";

if(result=="Attended")
{
    console.log("Present");
}
else{
    console.log("Absent");
}

console.log("**********");
let result1="Attended";

if(result1=="Attended")
{
    console.log("Present");
}
else{
    console.log("Absent");
}

console.log("***********");
let result2="attended"; 

if(result2=="Attended")  // Attended != attended js is case sensitive
{
    console.log("Present");
}
else{
    console.log("Absent");
}

// if = true and else = when if is not executing