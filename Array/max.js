// Find maximum no.

let arr = [10,20,50,30,70,100];

let copy = arr[0];

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]>copy){
        copy = arr[i];
    }
}
console.log(copy);