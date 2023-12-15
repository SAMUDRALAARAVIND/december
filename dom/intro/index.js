/**
 * Minimum cost ropes 
 */

// let arr = [3, 2, 2, 3, 8, 12], totalCost = 0;

// // sort in decreasing order 
// arr.sort((a, b) => b - a);
// while (arr.length > 1) { // (n - 1)
//     let currentCost = arr[arr.length - 1] + arr[arr.length - 2];
//     totalCost += currentCost;
//     // arr.splice(0, 2);
//     arr.pop(); arr.pop();
//     arr.push(currentCost);
//     arr.sort((a, b) => b - a); // (nlogn)
// }

// console.log(totalCost);

// TC: (n-1) * nlogn => n^2logn - nlogn
// O(n^2logn - nlogn) => O(n^2logn)

let arr = [10, 13, 13, 13, 10, 4];

let obj = {};


// { 10: 2, 13: 3, 4: 1}
arr.forEach((item) => {
    obj[item] ? obj[item]++ : (obj[item] = 1)
});

/**
 * {
 *   2: 3,
 *   3: 3,
 *   4: 1,
 *   8: 1,
 *   10: 1,
 *   12: 1
 * }
 */

let totalCost = 0;
let i = 1, n = arr.length;
while (i <= n - 1) {
    // extract the top two keys (minimum two values)
    let [a, b] = Object.keys(obj);  // [ "10", "13" , "14" ]
    // a = "10", b = "13" 
    if (obj[a] > 1) {
        // if first element has the frequency more than one
        let currentCost = 2 * a;
        totalCost += currentCost;

        // since we consumed two ropes of same length , delete those two ropes.
        if (obj[a] === 2) delete obj[a];
        else obj[a] -= 2;

        obj[currentCost] ? obj[currentCost]++ : (obj[currentCost] = 1)
    }
    else {
        let currentCost = Number(a) + Number(b);
        totalCost += currentCost;
        // currentCost = 14
        delete obj[a];
        if (obj[b] > 1) {
            obj[b]--;
        }
        else {
            delete obj[b];
        }
        obj[currentCost] ? obj[currentCost]++ : (obj[currentCost] = 1)
    }
    i++;
}

console.log(obj); // {finalLength: 1} 




