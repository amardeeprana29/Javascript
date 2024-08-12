// given the year of birth, if the age is between 13 and 19
//(both include) print teenage and in between  20 and 29 
//( both include) print Twenties

let yob =2000;
let age = 2024 - yob;

console.log("age is:",age);

if((age>=13) && (age<=19)){
        console.log("Teenage");
}else if ((age>=20) && (age<=29)){
        console.log("Twenties");
}
