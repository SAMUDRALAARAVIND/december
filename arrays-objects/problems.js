// "" , '', ``
// let username = "Suraj";
// let str = `I am ${username}`;

// // str => template string

// let s = "bm0";
// let i = s.length - 3;

// let ans = `#${s[i]}${s[i]}${s[i + 1]}${s[i + 1]}${s[i + 2]}${s[i + 2]}`
// 10 > 3
// 5 > 3
// "10" > "3"

// the comparision between strings follows the lexicographical order.

// "aba" , "abc"
// console.log("aba" < "abc");

// ascii code 

// "a" => 97
// "b" => 98
// "c" => 99
// "z" => 122

// "A" => 65
// "B" => 66
// "Z" => 90

// let value = prompt("Enter something");
// console.log(value);

// Find the largest subarray with no repeating elements

// let arr = [4, 3, 2, 8, 3, 4, 11];
// //               i=2         j=6
// // 5 length subarray 

// let i = 0, j = 1, map = {}, max = 1;
// map[arr[0]] = 0; // map[4] = 0

// // {4: 0}
// while (j < arr.length) {
//     let curr = arr[j];
//     if (map[curr] !== undefined && map[curr] >= i) {
//         // the key exists
//         i = map[curr] + 1;
//     }
//     map[curr] = j;
//     let currentLength = j - i + 1;
//     max = max < currentLength ? currentLength : max;
//     j++;
// }

// console.log(max);
// MyCodeSchool
