"use strict";

const arr = [4, 2, 7, 1, 10];

arr.sort(compareNum);
console.log(arr);

// //delete last item
// arr.pop(); 

// //add 1 item in the end
// arr.push(10); 

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`);
// });

// for (let value of arr) {
//     console.log(value);
// }

// console.log(arr);

// const str = prompt("", "");
// const products = str.split(", ");

function compareNum(a, b) {
    return a - b;
}
// console.log(products.join('; '));