     //object takes or have key value pairs
     // just as java it can access and there is another way to access them
     const sum = Symbol("OP")
     const human= {
          name : "Sohith",
          [sum] : "Hello",//correct way for declaring a symbol in objects
          age : 36,
          weight : 58,
          areas : ['jaipur', 'armoor', 'Indian'],
          "Foot" : 'Big',

     }
     // console.log(human.Foot);
     // console.log(human.Name);
     // console.log(human["age"]);//this is also a way to access them and it can also access the strings
     // console.log(human["areas"][1]);
     // console.log(human["sum"]);
     human.greatings = function(){
          console.log("Hello");
     }
     human.nameGreatings = function(){
          console.log(`Hello ${this.name}`);
     }

     // console.log(human.greatings); //this is a way to return a function of a function 
     // console.log(human.greatings()); //this is a way to access a function 
     // console.log(human.nameGreatings());

     //object singleton using constructor

     console.log(Object.keys(human));
     console.log(Object.values(human));
     console.log(Object.hasOwnProperty('name')); // gives a boolean value if that exists in the class 
     

     {
          //this is how json looks like
     }