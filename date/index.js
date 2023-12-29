/**
 * 1. Date api
 * 2. timer handling
 * 3. Symbol and BigInt
 */

// let d = new Date();
// console.log(d);
/**
Fri Dec 29 2023 20:27:40 GMT+0530 (India Standard Time)
    typeof d
    'object'
    d.getFullYear()
    2023
    d.getMonth()
    11
    d.getDate()
    29
    d.getDay()
    5
    d.getHours()
    20
    d.getMinutes()
    27
    d.getSeconds()
    40
    d.getMilliseconds()
    823
 */

// 15 Jan 1999, 4:25:45:345 ms AM => Thurs
// 29 Dec 2023, 20:53:00:000 ms PM => 
// Date(year, month, date, hrs, mins, seconds, millis)
// let rahulBirthDate = new Date(1999, 0, 15, 4, 25, 45, 345);
// let todaysInstance = new Date(2023, 11, 29, 20, 53, 0, 0);

// console.log(todaysInstance - rahulBirthDate);


// Rajesh => 10:30 PM Dec 25 2023 (London) => UTC / GMT


// Posting instance => 4:00 AM Dec 26 2023 (India) 
// Rahul  => 3:30 PM Dec 27 2023 (India) => IST

// 3day 5hrs ago

// convert time from any time zone to UTC.

// epoch time



// let d1 = new Date(1970, 0, 3, 10, 30, 0, 0);
// console.log(d1);

// let d2 = new Date(1970, 0, 1, 6, 0, 0);
// console.log(d2.getTime());

// Aniket => Posted a video on youtube => 2023 Dec 28 , 21:27:0:0 PM
// 24hrs
// Aravind => 2023 Dec 29 , 21:27:0:0 PM

// let d1 = new Date(2023, 11, 28, 21, 27, 0, 0);
// let d2 = new Date(2023, 11, 29, 21, 27, 0, 0);

// let e1 = d1.getTime() // epoch time of d1
// let e2 = d2.getTime(); // epoch time for d2
// console.log(d2 - d1);


// let d2 = new Date(2023, 11, 29, 21, 27, 0, 0);

// setTimeout and setInterval

// setTimeout is used to schedule a function after desired amout of time
// console.log(1);
// setTimeout(function () { // #100
//     console.log(5);
// }, 4000);
// setTimeout(function () { // #200
//     console.log(4);
// }, 1000);
// console.log(2);
// for (let i = 0; i < 5 * 10e8; i++) {
//     // 3685ms => 3.5s
// }
// console.log(3);

// 1 , 2 , 3, 5, 4
// schedular = []
// callback queue = []

// event loop => 


// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     console.log("clicked");
//     btn.disabled = true;
//     setTimeout(() => {
//         btn.disabled = false;
//         // stop the timer
//         clearInterval(intervalId);
//         btn.innerText = "click me"
//     }, 5000);

//     let timer = 5;

//     let intervalId = setInterval(() => {
//         btn.innerText = `Submit in ${--timer} seconds`
//     }, 1000)
// })

// let i = 0;

// setInterval(() => {
//     console.log("inside timer ", ++i);
// }, 1000)


// let timeoutId = setTimeout(() => {
//     console.log("after timeout");
// }, 2000);

// console.log("id: ", timeoutId);

// clearTimeout(timeoutId);


// BigInt and Symbol => ES6(2015)

// number data type => 64bit number

// let n1 = 383939474499494994; // 
// let n2 = 484949440303404402333; // > 64 bit or 8bytes
// // 7

// // 2^64-1 => maximum allowed value for number data type
// console.log(n1 + n2); // wrong addition 

// when we need deal with large numbers use bigint instead of plain number type
// let n1 = 383939474499494994n;
// let n2 = 484949440303404402333n;
// console.log(n1 + n2);

// let n = BigInt("20")
// console.log(n);

// Symbol => Unique identifier
// let x1 = Symbol("aravind");
// console.log(x1);
// let x2 = Symbol("aravind");
// console.log(x2);
// console.log(x1 == x2); // false as Symbols are unique

// function createUser() {
//     let key = Symbol("salary");

//     let u = {
//         name: "Aravind",
//         age: 23,
//         [key]: 38933
//     }

//     console.log(u[key]);

//     return u;
// }

// let u1 = createUser();
// let salary = Symbol("salary");
// console.log(u1[salary]);