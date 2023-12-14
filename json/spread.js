/**
 * 1. Spread Operator (...)
 * 2. Destructuting
 */

// let a = [10, 20, 30] ; // a = #100
// let b = a.slice(0, a.length); // [10, 20, 30] , b = #500
// b[0] = 199; // #500[0] = 199
// console.log(a[0], b[0]); // 10, 199



// let a = [10, 20, 30, 17];
// // ...[10, 20, 30] => 10, 20, 30
// let b = [...a]; // [ ...[10, 20, 30, 17] ] => [ 10, 20, 30, 17 ]
// console.log(a, b);
// console.log(a === b); // b is a copy of a

// function callme(a, b, c) {
//     // a = [10, 20, 30], b = undefined, c = undefined
//     console.log(a, b, c);
// }

// let x = [10, 20, 30]
// callme(...x) // callme( 10, 20, 30 )
// ...[10, 20, 30] => 10, 20, 30



// let user = { name: "aravind", age: 23 };
// // ...{k1: v1, k2: v2} => k1:v1, k2:v2
// // ...{name: "aravind", age: 23 } => name: "aravind", age: 23
// let student = { rollNumber: 183928, ...user }
// console.log(student);


// Strings 
// ..."aravind" => 'a', 'r', 'a', 'v', 'i', 'n', 'd'
// console.log([..."aravind"]);


// Destructuring 

// let arr = [10, 3, 34];

// let a = arr[1], b = arr[2];
// console.log(a, b);

// let [a, b] = arr.slice(1); // [3, 34]
// console.log(a, b);

// let user = { username: "aravind", password: "abc" }

// let { username: x } = user;

// console.log(x);

// let [, [x, y]] = [10, [3, 7], 100]
// let x = arr[1][0]
// console.log(x);

// let person = {
//     name: "Aravind",
//     address: {
//         city: "Warangal",
//         pincode: 393003
//     }
// }
// let { address: { pincode: abc } } = person
// console.log(abc);


// function printName({ age: x }) {
//     console.log(age);
// }

// printName({ name: "aravind", age: 23, rollNumber: 3839 })


// JSON methods => Javascript Object Notation



// let x = JSON.stringify(100); // converts data into string format


let x = '{"color": {"tint": "900","type": "black"}}'


let user = {
    username: "aravind",
    age: 23
}