 const customer_group1 = [8,12,11,11,18,24,5,10];
  const customer_group2 = [10,11,11,13,19,14];
  const customer_group3 = [12,12,14];

function discount(percentage, amount) {
 const discounted_amount = amount- (amount * (percentage / 100));
 return discounted_amount;
}

function age_checker(age) {
  for ( i = 0 ; i <= age.length; i++){
    
   if (age[i] >= 10) {
    return  ages = true;
  } else {
    return ages = false;
  }
  }
}

function calculate(customer_group, discount_func) {
  
   const group_count = customer_group.length;


  const amountperHead = 299;
 
  let sub_total = group_count * amountperHead;
  let discount = 0;
  let grand_total ;
 
  if(group_count < 6){
   let rest = (` Sorry, No Discount. Bill :  ${sub_total}`);
   console.log(rest);
   return 
   }

  
      const all_age_10_and_above = age_checker(customer_group);
   
        if( all_age_10_and_above == true  ){
          discount = 15;
          grand_total = discount_func(discount,sub_total);
           
        }else{
          discount = 10;
          grand_total = discount_func(discount,sub_total);
        }
 
      console.log(`${discount}% Discount. Bill:  ${grand_total}`);
}

calculate(customer_group1,discount);
calculate(customer_group2,discount);
calculate(customer_group3,discount);

