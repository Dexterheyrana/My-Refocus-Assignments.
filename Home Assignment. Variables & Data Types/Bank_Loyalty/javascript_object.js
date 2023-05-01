 let customer = {

   customer_name : "Dexter Heyrana",
   points: 12300, 
   cart : [{
      item : "Shampoo",
      quantity :2,
      price_$ : 3
   },
   {
      item : "Soap",
      quantity :2,
      price_$ : 2
   },
   {
      item : "Toothpaste",
      quantity :1,
      price_$ : 3
   }

]
 }
  console.log(`Hi, ${customer.customer_name}! We are happy to see you today.`);
  console.log(`Your current points are: ${customer.points} `);
  console.log("Purchase Items : ");
  let totalbill = 0;
  let cart = customer.cart;
 let sum = 0;
 let sumpoints = 0;
 
 for(let i = 0; i <cart.length ; i++){
   
   console.log (`${cart[i].quantity} x ${cart[i].item} --- $ ${cart[i].price_$} `)
   sum = cart[i].quantity * cart[i].price_$ ;
   totalbill += sum ;
   sumpoints += cart[i].quantity;
   
}

sumpoints += customer.points;
console.log(`Total Bill : $ ${totalbill}`);
console.log(`New Current Points :  ${sumpoints}`);