let number1 = 10;

let number2 = 20;

let number3 = 30;

let number4 = 40;

let number5 = 50;

let number6 = 30;

function addElements() 
{
  
let sum = 0;
 
 for (let i = 0; i < arguments.length; i++) 
{
   
 sum += arguments[i];
  
}
 
 return sum;

}

console.log(addElements(number1, number2, number3, number4, number5, number6));