// You give an array with even length, print the second half of the array

let arr = [1,2,3,4,5,6,7,8,9];

/*let start_index = arr.length/2 // Half length
let last_index = arr.length-1

for(i=start_index; i<=last_index; i++){
    console.log(arr[i]);
}
*/
// for both even and odd
let start_index = arr.length/2 // Half length for even
if(arr.length%2!=0){
    start_index = (arr.length+1)/2 // half length for odd
}
let last_index = arr.length-1

for(i=start_index; i<=last_index; i++){
    console.log(arr[i]);
}