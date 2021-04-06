//javascript/basic.js

var num1; // undefined
console.log(typeof num1);

num1 = 10; // number
console.log(typeof num1);

num1 = 'Hello'; // string
console.log(typeof num1);

num1 = false; // boolean
console.log(typeof num1);

num1 = null; // object
console.log(typeof num1);

num1 = { // object
    name: 'Hong',
    age: 20
}
console.log(typeof num1);

num1 = []; // object
num1[0] = 10;
num1[1] = 20;
console.log(typeof num1);

num1 = function () { // function
    window.alert('hello');
}
console.log(num1);

// function () { //window.alert('hello')};
// console.log(typeof num1);
// console.log(num1()); 

let num2;
num2 = 10;

{
    let num2;
    num2 = 20;
    console.log('{ num2: }' + num2);
}
num2 = 15;
console.log('num2: ' + num2);

const num3 = 77;
// num3 = 78; // cont 는 상수라서 값변경 불가
