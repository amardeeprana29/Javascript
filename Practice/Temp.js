/* Celsius to kelvin : k = 'c + 273.15
kelvin to celsius : c = 'k - 273.15
Fahrenheit to celsius : c =('F - 32)*5/9
Celsius to Fahrenheit : F = 'c * (9/5)+32
kelvin to Fahrenheit :  °F = (K − 273.15) × 9/5 + 32.
fahrenheit  to kelvin : K = (F − 32)×5/9 + 273.15 */

let kelvin, celsius, fahrenheit;
let degree = 30; // celsius
fahrenheit = degree *(9/5) +32 ;
console.log("Celsius to Fahrenheit",fahrenheit);

//converting fahrenheit to celsius and kelvin
let degreefahrenheit = 86 ; //fahrenheit
celsius = (degreefahrenheit - 32)*5/9 ; 
kelvin = (degreefahrenheit - 32) * 5/9 +273.15 ; 
console.log("Fahrenheit to celsius",celsius);
console.log("fahrenheit  to kelvin", kelvin);