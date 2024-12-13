// find the average of even no. b/w 1 to 50

let start = 1;
let end = 50;

let even_no=" ";
let sum = 0;
let count= 0;
let avg ;

for(let i= start; i<=end; i++){
    
    if(i%2==0){ 
      even_no=even_no + i +" "; 
      sum = sum +i ;
      count++;
      avg = sum/count;
    }
}
console.log(even_no);
console.log("Total numbers=",count);
console.log("average is=",avg);