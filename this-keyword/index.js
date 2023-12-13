// can u explain the execution 
// function multiplyBy(arg) {
//     // arg = 45
//     return true
// }

// let r = multiplyBy(45)(10); // r = 450
// console.log(r); // 450

// let r = multiplyBy(45)(10)
// console.log(r);


/*
function f1(a, b) { // f1 = #800 => Lexical Parent global = { c = 104 }
    // a = 1, b = 19
    console.log(a);  // 1
    return (x) => { // salman = #440 => Lexical Parent f1{ a = 1, b = 19 }
        // x = 10
        let a = 33;
        console.log(x + a + b + c);  // 10 + 33 + 19 + 104 = 166
    }
}
var c = 104;
f1(1, 19, 82)(10); // #440(10)
*/


// `this` keyword 

// window => Browser's js engine => global object
// console.log(window); 
// console.log(window);// window = #450
// console.log(this); // this = #450
// console.log(window === this); // #450 === #450

// console.log(window.aaa); // undefined

// var aaa = 190;

// function aaaa() {
//     console.log("aravind");
// }

// let aaaaa = 390;

// console.log(window.aaa);
// console.log(aaa);



// let user = { // user = #300
//     name: "aravind",
//     rollNumber: 184253,
//     print: function () { // #100
//         // this = #300
//         console.log(this); // #300 === #300
//     }
// }


// let x = user.print; // #100
// x();


// function callme() {
//     console.log(this); // global object
// }

// callme();

// function callme(){}

// let x = function(){}

/*
let user = {
    name: "aravind",
    print1: function () {
        // this = user
        console.log(this); // window

        function print2() {
            // this = window
            console.log(this);
        }

        print2();
    }
}

let x = user.print1;
x()
*/
/*
let x = 3030;
console.log(this); // window
let user = {
    name: "aravind",
    print1: () => {
        // this => not defined
        console.log(this); // window
        // console.log(x); // 3030
    }
}

user.print1();
*/

/*
let user = {
    name: "aravind",
    print1: function () {
        console.log(this); // user

        let print2 = () => { // lexical parent => print1
            console.log(this); // this => user
        }

        print2();
    }
}
user.print1();
*/

// let f = () => {
//     console.log(this); // window
// }

// f();



// undefined is a value of `undefined` data type.

// `null` is a value of object datatype 



// this 

// let user = {
//     firstName: 'aravind',
//     lastName: "samudrala",
//     printFullName: function () {
//         console.log(this.firstName + "  " + this.lastName);
//     }
// }

// user.printFullName();



// sort function on arrays , by default sorts on the basis of lexicographical order.

// let arr = ["a", "ab", "aa", "bc"]
// arr.sort();
// console.log(arr);

// let arr = [11, 22, 123, 28] // ["11", "22", "123", "28"]
// arr.sort();
// console.log(arr);
// [11, 22, 28, 123]


// let's say we are intrested to sort the below array in increasing order.
// when compare function returns -ve `a` comes before `b` in the final output.
// when compare function returns +ve `b` comes before `a` in the final output.
// let arr = [11, 22, 123, 28]
// [11, 22, 28, 123]
// arr.sort((a, b) => {
//     // should return a number 
//     if (a > b) {
//         // we need `b` before `a` so return +ve 
//         return a - b;
//     }
//     else if (a < b) {
//         // we need `a` before `b` => return -ve
//         return a - b;
//     }
//     else {
//         // a === b 
//         return a - b;
//     }
// })

// arr.sort((a, b) => a - b)

// console.log(arr);


// sort the below array in decrasing order
// let arr = [11, 22, 123, 28]
// [123, 28, 22, 11] 
// arr.sort((a, b) => {
//     if (a > b) {
//         // a = 100, b = 23 => `a` should be befor `b` 
//         return b - a;
//     }
//     if (a < b) {
//         // a = 56 , b = 100 => `b` should be before `a` 
//         return b - a;
//     }
//     return b - a;
// })
// arr.sort((a, b) => b - a)
// console.log(arr);


// TODO: homework => sort the below in the decreasing order of user's age
let users = [
    {
        name: "aravind",
        age: 22,
    },
    {
        name: "rahul",
        age: 24
    },
    {
        name: "Rajesh",
        age: 19
    }
]


