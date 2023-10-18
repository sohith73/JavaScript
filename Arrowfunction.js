// this and arrow functions
const user = {
     userName : "Sohith",
     price : 100,
     welcomeMessage : function(){
          console.log(`${this.userName}, welcome back to BSC.com`);
     }
}

// user.welcomeMessage();

function BSC(){
     let userName  = "Sohith 69";
     // console.log(this)/\;
     console.log(userName);
}

const bsc = () => {  // intro to arrow function remove that function and keep => this symbol 
     let userName = "Sohith 96";
     console.log(userName);
}
// bsc();
// BSC();

() => {} // arrow function  
// const add = (num,num1) => {  basic arrow function 
//      return num+num1;
// }
// this is implicit return  no need of {} and return statement
// const add = (num,num1) => num+num1;
const add = (num,num1) => (num+num1); // no need of return when we use () this we need return for this{}
console.log(add(19,1));

// for returning a class we can rap it in ({class})

const clas = (num,num1) => ({username : "Sohith"});
console.log(clas(2,3));

