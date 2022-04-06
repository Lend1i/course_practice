"use strict";

//To string

// 1)
console.log(typeof(String(null, 4)));

//2)
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com./catalog/" + num );
console.log(`https://vk.com./catalog/${5}`);

const fontSize = 26 + 'px';

//To number

//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt("15px", 10)));

// let answer = +prompt('', ''); //string to number

//To boolean

//0, '', null, undefined, NaN; False

//1)
let switcher = null;

if (switcher) {
    console.log('Working..');
}

switcher = 1;

if (switcher) {
    console.log('Working..');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"4444"));