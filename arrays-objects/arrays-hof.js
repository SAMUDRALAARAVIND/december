// Callback and Higher order functions 
/**
 * 1. recap
 * 2. Array's HOF
 * 3. Strings
 * 4. Assignments
 */

// function callme(a) {
//     // a => callback function
//     // console.log(typeof a); // function
//     a(88);
// }

// callme(function (x) {
//     // x = 30
//     console.log(x); // 30
// });


// let arr = [4, 3, 2];
//               i=2
/**
 * forEach => iterates on the array and invokes the callback for each element
 *  forEach method doesn't return anything ( returns undefined ).
 *
 * map => returns another array with the same length of original array.
 * filter
 * reduce
 */

// let callback = function (element, index, list, x) {
//     // element = 4, index = 0, list = [4, 3, 2]
//     // element = 3, index = 1, list = [4, 3, 2]
//     // element = 2, index = 2, list = [4, 3, 2]
//     console.log(element, index, list, x);
// }

// arr.forEach(callback);


// let arr = [4, 3, 2];
// // //               9
// // // function myForEach(cb) {
// // //     for (let i = 0; i < arr.length; i++) {
// // //         cb(arr[i], i, arr);
// // //     }
// // // }
// // // let sum = 0;
// // // myForEach(function (element, index) {
// // //     console.log(element, index);
// // // });

// // // console.log(sum);

// // let result = arr.forEach(function (e, i, l) {
// //     console.log(e, i, l);
// // })

// // console.log(result);

// /**
//  * [undefined, undefined, undefined]
//  */
// let r1 = arr.map(
//     function (element, index, list) {
//         // 2 + 2 
//         return element + index;
//     }
// )

// // let r2 = arr.forEach(function (element, index, list) {
// //     // console.log(element, index, list);
// // })

// console.log(r1); 


// let arr = [4, 3, 10];
// [8, 9, 20]

// construct another array of same length, with double of even values and triple of odd values.

// let output = arr.map(function (element) {
//     return element % 2 === 0 ? 2 * element : 3 * element
// })
// console.log(output);

// let output = [];
// arr.forEach(e => {
//     output.push(
//         e % 2 === 0 ? 2 * e : 3 * e
//     )
// })

// console.log(output);


// let arr = [4, 3, 10];

// // [4, 10]
// let r1 = arr.filter(e => e % 2 === 0)

// console.log(r1);



// let arr = [4, 3, 2, 9];
//                  i=4

// reduce method takes atmost two argumnets atleast 1 argument
// let r = arr.reduce((prev, curr, index) => {
//     // prev = 16, curr = 9, index = 3
//     console.log("aravind");
//     return prev + curr;// 16 + 9 => 25
// }, 7);
// reduce( callback, intialValues );

// let r = arr.reduce((prev, curr, index) => {
//     // prev = 9, curr = 9, index = 3
//     console.log("aravind");
//     return prev + curr;// 9 + 9 = 18
// });
// console.log(r); // 18

// Strings 

// let arr = [10, 20, 30]
// arr[1] = -1; // mutable
// console.log(arr);

// let str = "abc";
// str[1] = "#"; // immutable 
// console.log(str);

// let str = "ab#$9";/
//           2
// console.log(str.length);

// console.log(str.charCodeAt(4));

// 121 => y

// let character = String.fromCharCode(57);
// console.log(character); // "9"

// let arr = [4, 2, 9];
// "4ABC2ABC9"
// let r = arr.join("ABC");
// console.log(r);

// reverse of joining => splitting

// let fragments = "4#2#9".split("#")
// console.log(fragments);

// let val = "acciojob,students,boys;girls,mentors"
// console.log(val.split(/,|;/));

// {}, [] 

// for in(keys) and for of(values) loops 

let arr = [4, 11, 99];
//         0   1   2

// for (let i in arr) {
//     console.log(i, typeof i); // "0","1","2"
//     console.log(arr[i]); // arr["0"] => 4
// }

// for (let i of arr) {
//     console.log(i); // 4, 11, 99
// }

// let user = {
//     username: "aravind",
//     password: "abc",
//     company: "acciojob"
// }
// // user["username"]
// for (let i in user) {
//     console.log(i, user[i]); // "username" ,"password" , "company"
// }

// for (let i of user) {
//     console.log(i, user[i]); // "username" ,"password" , "company"
// }

// let str = "AraVind1#$";
// let r = str.toLowerCase(); // "aravind"
// console.log(r, str);
// let r2 = str.toUpperCase();
// console.log(r2);

// let x = prompt("Enter a number ");
// console.log(Number(x));

function f(a, b = 100) {
    // a = 3, b = 4
    console.log(a, b); // 3 , 100
}


f(3, 4);
f(3, undefined); 