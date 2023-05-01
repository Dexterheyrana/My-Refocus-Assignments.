const birth_year = 1999;
let current_year =  new Date().getFullYear();
let age = current_year - birth_year;

console.log(`Patients Age : ${age}`);
let birth_month = 5; 
const current_month = new Date().getMonth();
current_year-=1;
age = current_year - birth_year

if( birth_month <= current_month){
   age++;
   console.log(`Patients Accurate Age : ${age}`);
}
else{
   console.log(`Patients Accurate Age : ${age}`);
}




