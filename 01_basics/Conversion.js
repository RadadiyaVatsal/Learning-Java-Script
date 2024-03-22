let id=1
let Id=String(id) // it will convert int to string

console.log(typeof Id);
console.log(Id);



let str="123";
let num=Number(str);

console.log(typeof num);
console.log(num);

/*
let str="1234dfds";
let num=Number(str);

console.log(typeof num); // Number
console.log(num); // NaN

so when u try to give incorrect form of string then it will give Number as a data type
but it's value will be NaN 
*/



let myStr=""; 
let boolMyStr=Boolean(myStr);

console.log(typeof boolMyStr);
console.log(boolMyStr);

/*
 if u try to convert string to boolean 
 then if string is empty like "" then it will give false 
 if string is not empty then it will give true
 

 same for int when u conver int to bool

 if value of int variable is non-zero then it will give true
 if value of int variable is 0 then it will give false

*/
