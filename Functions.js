
function sayMyName(){
     console.log("s");
     console.log("o");
     console.log("h");
     console.log("i");
     console.log("t");
     console.log("h");
 }
 
 // sayMyName()
 
 // function addTwoNumbers(number1, number2){
 
 //     console.log(number1 + number2);
 // }
 
 function addTwoNumbers(number1, number2){
 
     // let result = number1 + number2
     // return result
     return number1 + number2
 }
 
 const result = addTwoNumbers(3, 5)
 
 // console.log("Result: ", result);
 
 
 function loginUserMessage(username = "sam"){
     if(!username){
         console.log("PLease enter a username");
         return
     }
     return `${username} just logged in`
 }
 
 // console.log(loginUserMessage("hitesh"))
 // console.log(loginUserMessage("hitesh"))
 
 
 function calculateCartPrice(val1, val2, ...num1){
     return num1
 }
 
 // console.log(calculateCartPrice(200, 400, 500, 2000))
 
 const user = {
     username: "Sohith",
     prices: 199
 }
 
 function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 
 // handleObject(user)
 handleObject({
     username: "sam",
     price: 399
 })
 
 const myNewArray = [200, 400, 100, 600]
 
 function returnSecondValue(getArray){
     return getArray[1]
 }
 
 // console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 400, 500, 1000]));     

//  --------------scope--------------------------------
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}