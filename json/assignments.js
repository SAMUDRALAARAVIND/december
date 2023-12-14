// let str = "dododod";
// let ans = {};

// /**
//  * {
//  *      str[i] : [0]
//  * 
//  * }
//  */

// for (let i = 0; i < str.length; i++) {
//     if (ans[str[i]]) {
//         // already the character str[i] is present in the map
//         ans[str[i]].push(i)
//     }
//     else {
//         // if the current character is not present inside the object 
//         ans[str[i]] = [i]
//     }
// }




// BODMAS rule
// let x = 10;
// let y = 5;
// let z = x % y ** 2; // 10 % 25
// console.log(z); // 10


// 2 * 10 - 3 => 20 - 3 => 17



// 99 => 'c'
// 122 => 'z'
// 125 => 

// Math.random() => returns a number in the range (0, 1);

function generateValidCharCode() { // O(1)
    // valid character code : [ 48 , 57 ] | [65, 90] | [97, 122]
    // 0.00399303 * 100 => 0.399303 => 0
    // 0.99839292 * 100 => 99.839292  => 99
    let num = parseInt(Math.random() * 100); // [0 , 99]

    if ((48 <= num && num <= 57) || (65 <= num && num <= 90) || (97 <= num && num <= 99)) {
        return num;
    }
    // num = [0, 47] | [58, 64] | [91, 96] => 0 / 5 => 0

    return 100 + parseInt(num / 5); // [100, 119]
}

function generateRandomStr(n) {
    let str = "";
    for (let i = 1; i <= n; i++) { // O(n)
        str += String.fromCharCode(generateValidCharCode());
    }

    return str;
}

console.log(generateRandomStr(5));; // "DDDDD"

