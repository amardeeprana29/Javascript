// given any character , if it is vowel than print "Vowel"

let choice = "f" ;

switch(choice){
    case "a": console.log("vowel",choice);
            break;
    case "e": console.log("vowel",choice);
            break;
    case "i": console.log("vowel",choice);
            break;
    case "o": console.log("vowel",choice);
            break;
    case "u": console.log("vowel",choice);
            break;
    default: console.log("Constant",choice);
}

console.log("********other way******");

let char="f";

if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
    console.log("vowel",char);
}else{
    console.log("constant",char);
}