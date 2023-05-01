function counter(){
   let count = 1;
   console.log('Original count : ' +count);
   function add (count){
   count += count;
      console.log('New  counter : '+ count);
   }
   
  return add;


}
counter()(1);