const store_inventory = [
   {
      item: "shampoo",
      quantity: 1,
      price_$: 3,

   },
   {
      item: "Soap",
      quantity: 0,
      price_$: 2,

   },
   {
      item: "Toothpaste",
      quantity: 2,
      price_$: 3,

   }

]

const new_variables = [
   {
      item: "shampoo",
      quantity: 5,
      price_$: 4,
      inventory_index: 0,
   },
   {
      item: "Soap",
      quantity: 10,
      price_$: 2,
      inventory_index: 1,
   },
   {
      item: "Toothpaste",
      quantity: 10,
      price_$: 3,
      inventory_index: 2,
   }


]

const processDeliveries = function(item_obj) {


   new_variables.forEach((item_obj) => {
      store_inventory[item_obj.inventory_index].quantity += item_obj.quantity;
      store_inventory[item_obj.inventory_index].price_$ = item_obj.price_$;
   })
   console.log("Delivered items have been added to the Inventory");
   console.log("New Inventory Summary :");
   console.log(store_inventory);

}

processDeliveries(new_variables);

function productSummary(items_obj) {
   const report_summary = store_inventory.map((items_obj) => {
      const items_id = items_obj.item.slice(0,3).toLowerCase();
      let remarks = "Good";
      let message = "Item ID : " + items_id + " | " + items_obj.item +  " | " + "Stocks Left : " + items_obj.quantity + " | Remarks : " ;
       if (items_obj.quantity  < 10){
                remarks = " item stocks is low ";
             
       }
             
       
       console.log( message.concat(remarks));
     
   })
 
   }

 productSummary(store_inventory);
