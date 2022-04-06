"use strict";

// let x = 5; alert(x++); // x++ = 5   ++x = 6


//NaN, because [] + false - null + true = its not math action, but [] + false == string
console.log([] + false - null + true); 

let y = 1; 
let x = y = 2; 
// alert(x); 

console.log([] + 1 + 2); // "12"

// alert("1"[0]); - 1

console.log(2 && 1 && null && 0 && undefined);
// && запинается на лжи
// || запинается на правде

console.log(!! (1 && 2) === (1 && 2));

// alert(null || 4 && 3 || 4); //return 3