
// let a = 20;
// function callme(x, y) {
//     let f = (m, n) => {
//         console.log(m * n);
//     }
//     let k = f(y + x, y - x);
//     return k;
// }

// let r = callme(10, 20);

// console.log(r);


// Scope and Scope chain

// Scope => the scope variable

// the region where a variable is accessable is called as the scope of that variable 



// let a = 20;
// function callme() {
//     let b = 30;
//     console.log(a, b); // 
// }
// callme();

// console.log(a, b);

// let a = 20; 
// function callme() {
//     let a = 10;
//     function callme1(){
//         let a = 30; 
//         console.log(a + b);// 30 + 99 = 129
//     }
//     callme1();
// }

// let b = 99;
// callme();

let a = 20;
function f1(cb) {
    let a = 30;
    cb();
}
let callback = () => {
    console.log(a);
}
f1(callback);
