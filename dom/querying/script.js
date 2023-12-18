/**
 * 1. Basic Constructor functions
 * 2. DOM CRUD operations
 * 3. Element Properties
 * 4. Basic events
 *
 *
 * Convention: Functions starting with capital letter are called constructor functions.
 */


// function User() {
//     // this = #500
//     this.callme = function () {
//         console.log("inside callme");
//     }
//     // x = undefined
//     this.name = "aravind";
//     this.name = "ankita"
//     this.rollNumber = 283939;
//     return 10;
// }
// // `new` will create an empty object in the HEAP
// var x = new User(); // x = #500
// console.log(x);

// function Product(n, p, r, os = "windows") {
//     // this = #1200
//     this.name = n;
//     this.price = p;
//     this.ram = r; 
//     this.os = os ;
// }

// let p1 = new Product("Macbook", 2829, "16GB", "macOS");
// let p2 = new Product("thinkpad", 2939, "8GB"); 
// let p3 = new Product("Iphone", 3893, "10GB", "macOS"); 

// let p1 = {
//     name: "Macbook",
//     price: 3839, 
//     ram: "16GB"
// }

// let p2 = {
//     name: "Macbook",
//     price: 3839, 
//     ram: "16GB"
// }

// let p3 = {
//     name: "Macbook",
//     price: 3839, 
//     ram: "16GB"
// }





// DOM querying => extracting HTML element objects from the DOM tree.


// 1. extracting node by using id.

// let element = document.getElementById("");
// console.log(element); // element => null

// 2. extracting nodes by using classnames .
// always returns an array of HTML element objects
// let elements = document.getElementsByClassName("djjdjd");
// console.log(elements); 

// 3. extracting nodes by using tagName 
// p

// let elements = document.getElementsByTagName("p");
// console.log(elements); // 2

// 4. extracting nodes by css selectors 

// let element = document.querySelector("div>p");
// console.log(element); // para1

// let elements2 = document.querySelectorAll("div p ~ b");
// console.log(elements2);


// const bold = document.querySelector("#para1 + b");
// console.log(bold);

// const input = document.getElementById("uname");
// console.log(input);


// Delete property 

// let user = {
//     name: "aravind",
//     age: 23,
//     rollNumber: 38393
// }

// let x = "rollNumber";


// delete user[x] // user["rollNumber"]
