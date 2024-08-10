// if total_bill is more than 500, then give a 10% discount , 
// and if the total bill is more than 1000 , then give a 20% discount,
// and in all other cases there will be no discont

let total_bill = 499;
let discount ;
if(total_bill>=1000){
    discount = total_bill - total_bill*0.2
    console.log("your total_bill after 20% discount =",discount);
}else if (total_bill>=500){
    discount = total_bill - total_bill*0.1
    console.log("your Total_bill after 10% discount", discount);
}else {
    console.log("your Total_bill no discount=", total_bill);
}