const num_arr = [2, 8, 6, 10, 5];

//function to return sum of elements of the array
function sumElements(numArray)
 {
  
let sum = 0;
 
 for (let i = 0; i < numArray.length; i++)
 {
   
 sum = sum + numArray[i];
  
}
 
 return sum;

}

console.log(sumElements(num_arr));