//Given stored Username and password and input username and
// password , print if the user can login or not.

let stored_email="abc@gmail.com";
let stored_pss="1234";

let input_email="abc@gmail.com";
let input_pass="1234";

if(stored_email==input_email){
    if(stored_pss==input_pass){
        console.log("You can login");
    }else {
        console.log("Your password is wrong");
    }
}else {
    console.log("Email is not found");
}