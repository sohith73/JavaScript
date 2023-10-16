const a = 29 // declaring a variable from const 
// console.log(a);
var b = 90;// never declare a variable as var in js it is a bad practice 
// console.log(b);
c  = 42; // declare a variable without anything
// console.table([a,b,c]);


//number is a data type we know it as integer
//string is a data type we know it as string
//boolean is a data type we know it as boolean
//null is a data type we know it as empty 
//undefined is a data type we just declare variable name with no value 
//symbol => unique one 
let score = 90;
console.log(typeof(score));  // lets see type conversions in js 
score = "90"
console.log(typeof score);
let value = Number(score);
console.log(typeof value);  // js converts anything '99' -> 99 '99a'-> nan(Not a number) 
