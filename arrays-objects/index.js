// string, number, boolean, undefined, function, object, Symbol, BigInt

// +, * for 5 numbers

// let a = 10, b = 20, c = 30, d = 40, e = 50;

// Arrays => Object datatypes
// Collection of data
// undefined => nothing

// let nums = [10, 20, 30, 40, 50];
//                        
//          0    1   2              3          4
// indexing

// "salman"
// console.log(typeof nums[3][1]);

// console.log(nums.length - 1);

// add a new element
// we can add elements in the arrays at any place.
// adding at the last => push
// adding at the front => unshift
// remove at the backside => pop()
// remove from front => shift()


// adding anywhere
// push(34, 55) => [10, 20, 30, 40, 50, 34, 55, "aravind"]
// console.log(nums.length); // 5
// nums.push(34, 55, [10, 20, 30]);
// console.log(nums.length); // 6

// let nums = [10, 20, 30];
// unshift(34) => [34, 22, 13, 10, 20, 30]
// console.log(nums);
// nums.unshift(34, true, "aravind");
// console.log(nums);
// console.log(nums); // [10, 20, 30]
// let removedElement = nums.pop();
// console.log(nums, removedElement); // [10, 20] , 30
// let removedElement2 = nums.shift();
// console.log(nums, removedElement2); // [20]

// splice => we can delete/add elements anywhere in the array.

// let arr = [4, 3, 10, 12, 18];
// let deletedElements = arr.splice(2, 0);
// console.log(arr); // [4, 3, 18]
// console.log(deletedElements); // [10, 12]

// let deletedElements = arr.splice(2, 0, "aravind", true);
// // deletedElements = []

// console.log(deletedElements); // [] 
// console.log(arr); // size = 7

// let deletedValues = arr.splice(2, 2, 6, 7, 8);
// console.log(deletedValues);
// console.log(arr);

// let arr = [10, 3, 7, 8, 13];
//         
// delete all the odd number in this array without creating another array.

// [10, 3, 7, 8, 13, 15, 20, 23]
//         i=2
// [10, 7, 8, 13, 15, 20, 23]

// 3 % 2 = 1
// 10 % 2 = 0
// for (let i = 0; i < arr.length;) {
//     if (arr[i] % 2 == 1) {
//         // odd number 
//         arr.splice(i, 1);
//     }
//     else {
//         i++;
//     }
// }

// let arr = [7, 3, 19, 38, 20, 11];
// //            1   2   3
// // subarray
// // slice => doesn't effect the original array


// let subArray = arr.slice()
// console.log(subArray);
// console.log(arr);


// Objects
// Object => data will be in the key:value pair format

// let arr = [10, 20, 34];
//         0 ,  1,  2

let user1 = ["aravind", "SDE"]
//               0  ,,,,  1
let user = {
    name: "aravind",
    role: "SDE"
};
// console.log(user1[1]);
// user1[0] = "Aravind";
// console.log(user1);
// console.log(user["name"], user.name);
// user["name"] = "Aravind";
// console.log(user);
// console.log(user);
// delete user.role;
// console.log(user);
console.log(user);
user.salary = 3893;
user.salary = user.salary + 1;
console.log(user);
