"use strict";

// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     // setTimeout(function () {
//         console.log(2);
//     // });
// }

// first();
// second();   

// function learnJS(lang, callback) {
//     console.log(`i learn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('i finished it lesson');
// }

// learnJS('JavaScript', done);

const options = {
    name: 'test',
    width: '1024',
    height: '1024',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("test");
    }
};

options.makeTest();

const {border, bg} = options.colors;

console.log(border);

//перебор ключей в объектах
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`option ${i} haves value ${options[key][i]}`);
        } 
    } else {
        console.log(`option ${key} haves value ${options[key]}`);
    }
}

console.log(Object.keys(options).length);

// const items = {
//     bottle: '1',
//     fireplace: '2',
//     matches: '1',
//     artifacts: {
//         axe: 'there is',
//         backpack: 'there is',
//         redIron: 'have not'
//     }
// }

// console.log(items);

// for (let key in items) {
//     if(typeof(items[key]) === 'object'){
//         for (let i in items[key]){
//             console.log(`item name ${i} item stock ${items[key][i]}`);
//         }
//     } else {
//         console.log(`item name ${key} item stock ${items[key]}`);
//     }
// }



