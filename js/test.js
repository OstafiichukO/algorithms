// // console.log(isNaN("Hello"))
// // console.log(isNaN(345))
// // console.log(isNaN('1'))
// // console.log(isNaN(true))
// // console.log(isNaN(false))
// // console.log(isNaN(undefined))

// const arrayData = [7, "correct", 0, false, 9, NaN, ""]

// const notFalsy = []

// for (let i = 0; i < arrayData.length; i++) {
//   if (!!arrayData[i]) {
//     notFalsy.push(arrayData[i])
//   }
// }

// // console.log(notFalsy)


// const a = "constA"
// const b = a

// const c = () => "constC";
// const d = c

// // console.log("a", a)
// // console.log("b", b)
// // console.log("c", c)
// // console.log("d", d)

// // console.log(a === b)
// // console.log(c === d)

// //  const obj = {
// //     name:  "vivek",
// //     getName: function(){
// //     console.log(this.name);
// //   }
     
// // }
       
// // const getName = obj.getName;
       
// // const obj2 = {name:"akshay", getName };
// // obj2.getName();

// const obj1 = {
//     address : "Mumbai,India",
//     getAddress: function(){
//     console.log(this.address);
//   }
// }
   
// const getAddress = obj1.getAddress;
// const obj2 = {name:"akshay"};
// // obj2.getAddress();

// // ---------------

// const bikeDetails = {
//     displayDetails: function(registrationNumber,brandName){
//     return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
//   }
// }
   
// const person1 = {name:  "Vivek"};
     
// const detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

// // console.log(detailsOfPerson1());

// function randomFunc(){
//   var obj1 = {name:"Vivian", age:45};

//   return function(){
//     console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

//   }
// }

// var initialiseClosure = randomFunc(); // Returns a function

// // initialiseClosure();

// let obj11 = {x:'Hello', y:'Bye'};
// let clonedObj1 = {...obj1, ...obj2}; // Spreads and clones obj1
// // console.log(obj11);

// // function runFunc(){
// //   console.log("1" + 1); // 11
// //   console.log("A" - 1); // NaN
// //   console.log(2 + "-2" + "2"); // 2 - 22
// //   console.log("Hello" - "World" + 78); // NaN
// //   console.log("Hello"+ "78"); // Hello78
// // }
// // runFunc();

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

function bigFunc(element){
  let newArray = new Array(700).fill('♥');
  return newArray[element];
}

console.log(bigFunc(599)); // Array is created
console.log(bigFunc(670)); // Array is created again

function bigFunc(){
  let newArray = new Array(700).fill('♥');
  return (element) => newArray[element];
}

let getElement = bigFunc(); // Array is created only once
getElement(599);
getElement(670);  