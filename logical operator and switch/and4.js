// male = 21 and female= 18

let gender = "female";
let age = 19;

if(gender=="male"){
    if(age>=21){
        console.log("He can marry");
    }else{
        console.log("He can not marry");
    }
}else if(gender=="female"){
    if(age>=18){
        console.log("She can marry");
    }else{
        console.log("She can not marry");
    }
}else {
    console.log("Wrong input");
}
