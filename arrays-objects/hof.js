// _, $ or alphabet
// can contain _,$, alpha numeric
// function callme(a, b) { // named function
//     // a = 10 , b = -2
//     // 10 + -2 => 8
//     return a + b;
// }

// // 10, 20 => arguments
// console.log(typeof callme); // "function"
// let result = callme(10, -2);
// console.log(result);

// let callme = a => 2 * a;

// let result = callme(10) // function
// console.log(result); // undefind


// Callbacks , Higher order functions

// function callme() {
//     return function () {
//         console.log("inside another function");
//     };
// }

// let x = callme() // x = 10 
// console.log(x);
// console.log(typeof x); // number

// a => callback function 
// callme => Higher order function

// when a function is passed as an argument to another function then i.e called as callback function 

// a function that takes / returns another function is called as Higher Order function .


let arr = [10, 20]
//         i=0
// let x = arr.push(3, 10, 40);
// console.log(x);
// console.log(arr);
// forEach =>? HOF

arr.forEach((element, index) => {
    console.log(element, index);
    console.log("inside callback");
});


// function myForEach(x) {
//     // x = undefined 
//     x(-1, -4); // undefined()
//     x(10, 20)
// }

// myForEach((a, b) => {
//     //a = 10, b = 20
//     console.log(a, b);
//     console.log("Aravind");
// })
