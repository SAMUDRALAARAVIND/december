/**
 * 0. primitive and non-primitive data types.
 * 1. Hoisting TDZ
 * 2. Block scope
 * 3. Closures
 */

/**
 * Javascript code
 * i. Creation phase
 * ii. Execution Phase
 */


// Primitive datatypes ( simple data types )

// fixed size variable 
// stack
// data types which will be stored in stack memory are called as primitive datatypes
// let a = "abc"; // 8bytes

// number, boolean, undefined, string

// Heap memory
// objects, function 

// function x() {
//     console.log("djkdk");
// }

// const obj = {
//     name: "aravind"
// }

// dynamic size variable
// heap memory
// let arr = [10, 20, 30, 40]; // 8*3 - 24bytes




// let str = "aravind"; // 7bytes of memory #600
// // let fullName = "Samudrala " + str ; // "Samudrala Aravind" => 
// str = str + "abc"; // "aravind" + "abc" => "aravindabc" => #700



// let arr = [4, 3];
// let b = arr ;
// b[0] = 99 ;
// console.log(arr, b);


// function mutate(a, b) {
//     // a = 100, b = 99
//     a = 100;
//     b = 99;
// }

// let x = 199, y = [9, 45];
// // x = 199, y = #50

// mutate(x, y); // mutate(199, #50)

// console.log(x, y); // 199,  [9, 45]


// Hoisting 
/**
 * i. Creation Phase ( scans every line in that context then variable will intialised with some data )
 * ii. Execution phase ( code gets executed line by line )
 */


// let, const, var, function

// let and const were introduced in ES6 => 2015 yr
// let a = 10;
// const b = 20;


// console.log(b);
// let a = 20;
// console.log(a);
// var b = 90;
// console.log(b);

// partial hoisting => undefined (var)
// full hoisting => actual data (function)
// a();
// // var a = 20; 
// function a() {
//     console.log("aravind");
// }
// a is a non primitive 


// function callme() {
//     function a() {
//         console.log("aravind");
//     }

//     return a;
// }

// let r = callme(); // undefined
// r();


// console.log(a); // undefined
// function a() { };

// var : creation phase : a = undefined
// funtion: creation phase : a = function a() {}




function callme() {
    let a = 20;
    return () => {
        // a = 100 (gp) , b = 200 (gp)
        console.log(a + b);
    }
}

let a = 100, b = 200;

let r = callme();

r();


// Closure : the function binding it's scope to it's outer environment ( lexical parent ) is called closure.