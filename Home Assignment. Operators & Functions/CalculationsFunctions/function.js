// Object Variable
let obj = {
   num1 : 100,
   num2 : 50,
   sum : 150,
   difference : 50, 
   product : 500,
   qoutient : 20
} 
// Print the Object Data
function showData (first , second ,sum,difference,product,qoutient){
 first = obj.num1;
 second = obj.num2;
sum = obj.sum;
difference= obj.difference;
 product = obj.product;
 qoutient = obj.qoutient;
 
 console.log("First Number : " + first);
 console.log("Second Number : " + second);
 console.log("The sum : " + sum);
 console.log("The difference : " + difference);
 console.log("The product : " + product);
 console.log("The qoutient : " + qoutient);
 console.log ("=============================");
}


// Add two Paramaters
function add (num1,num2){
 
   return   num1 + num2;
   

}
// Subtract two Paramaters
function Subtract (num1,num2){
 
   return   num1 - num2;

}
// Multiply two Paramaters
function Multiply(num1,num2){
 
   return   num1 * num2;
  
   

}
//Divide two Paramaters
function Divide(num1,num2){
  
   return  num1 / num2;
   
   

}

// Update the Object Data

function newSetOfNumber(num1,num2,){
   obj.num1 = num1;
   obj.num2 = num2;
   obj.sum = num1 + num2;
   obj.difference = num1 - num2;
   obj.product = num1 * num2;
   obj.qoutient = num1 / num2;

   



}
showData();
newSetOfNumber (200,10);
showData();
newSetOfNumber (500,20);
showData();