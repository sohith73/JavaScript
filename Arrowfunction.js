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
bsc();
BSC();
