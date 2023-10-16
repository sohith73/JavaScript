console.log("Hello world!");
//String interpolation
console.log(`Hello world`);// which acts as f string in python
let a = 10
let score =100
let userName = "Sohith Bandreddi  "
userName = userName.trim();
// console.log(`HI ${userName} your current score is ${score} and added score ${a} so now total score is ${score+a}`);
// --------- Numbers -----
//when you see a float number with 2 digits after point you can achieve  it by using .toFixed() function
a = 100
console.log(a.toFixed(2));
const bal = new Number(a);
console.log(bal);
console.log(bal.toString())

console.log(Math.floor(Math.random()*(10-1+1))+1)