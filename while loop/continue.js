let i = 1;
let a;
while(i<=10){
   
   a= i++;
    if(a==4){
        console.log("skipped",a);
        continue;
    }
    console.log("i is ",a);
}