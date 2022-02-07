"use strict";

const obj = {
    a: 5,
    b: 1
};

function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}


const numbers = {
    a: 7,
    b: 2,
    c: {
        x: 1,
        y: 3
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(numbers);
console.log(newNumbers);

const add = {
    d: 17,
    i: 20
};

const clone = Object.assign({}, add);

clone.d = 20;


// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();

newArray[1] = 'asd';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c); 
}

const num = ['2', '5', '7'];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);