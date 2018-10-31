const kelvin = prompt('What is the Kelvin temperature today?');
// converting to celsius
const celsius = kelvin - 273;
//calculating to fahrenheit
const Fahrenheit = celsius * (9/5) + 32;
// non decimal number on fahrenheit
console.log(Math.floor(Fahrenheit));

console.log('The temperature is ' + Math.floor(Fahrenheit) + ' degrees fahrenheit');
